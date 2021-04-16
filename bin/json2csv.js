const json2csv = require('json2csv');
const fs = require('fs');

/**
 * 配列変換
 */
function object2Array(v, l, r) {
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
const languages = ['ja', 'en', 'ko', 'zh', 'zh-TW'];
languages.forEach((language) => {
    const list = ['common', 'mail', 'contents', 'cinema', 'event'];
    list.forEach((name) => {
        const json = JSON.parse(fs.readFileSync(`./public/default/i18n/${name}/${language}.json`, 'utf8'));
        const r = [];
        Object.keys(json).forEach(k => {
            const v = json[k];
            const l = k;
            object2Array(v, l, r);
        });
        const parser = new json2csv.Parser();
        const result = parser.parse(r);
        fs.writeFileSync(`./bin/output/csv/${name}/${language}.csv`, result);
    });
});

