const csv2json = require('csv2json');
const fs = require('fs');

/**
 * 配列変換
 */
function array2object(v, l, r) {
    Object.keys(v).forEach(k => {
        const v1 = v[k];
        const l1 = l + '_' + k;
        if (typeof v1 !== 'object') {
            r.push({ key: l1, value: v1 });
            return;
        }
        object2Array(v1, l1, r);
    });
}


async function readCSV(file) {
    return new Promise((resolve, reject) => {
        let csv = '';
        const stream = fs.createReadStream(file, {
            encoding: "utf8",
            highWaterMark: 1024,
        })
            .pipe(csv2json());
        stream.on("data", (chunk) => {
            csv += chunk.toString('utf8');
        });
        stream.on('end', () => {
            resolve(JSON.parse(csv));
        });
    });
}

async function main() {
    const languages = ['ja', 'en', 'ko', 'zh', 'zh-TW'];
    languages.forEach((language) => {
        const list = ['common', 'mail', 'contents', 'cinema', 'event'];
        list.forEach(async (name) => {
            const csv = await readCSV(`./bin/output/csv/${name}/${language}.csv`);
            const result = {};
            csv.forEach(c => {
                try {
                    c.key.split('_');
                } catch (error) {
                    console.error(c, name, language);
                }
                const list = c.key.split('_');
                const v = c.value;
                let key = result;
                list.forEach((k, i) => {
                    if (key[k] !== undefined) {
                        key = key[k];
                        return;
                    }
                    if (list.length === (i + 1)) {
                        key[k] = v;
                        return;
                    }
                    key[k] = {};
                    key = key[k];
                });
            });
            fs.writeFileSync(`./public/default/i18n/${name}/${language}.json`, JSON.stringify(result, null, '    '));
        });
    })
}

main();