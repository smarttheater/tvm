/**
 * API
 */

import * as debug from 'debug';
import * as express from 'express';
import { NOT_FOUND } from 'http-status';
import * as httpStatus from 'http-status';
import * as moment from 'moment';
import * as winston from 'winston';
const log = debug('application: /api/util');
const router = express.Router();

/**
 * プロジェクト設定取得
 */
router.post('/project', async (req, res) => {
    log('project', req.body);
    try {
        const response = {
            gmoTokenUrl: process.env.GMO_TOKEN_URL,
            env: process.env.APP_ENV,
            gtmId: process.env.GTM_ID,
            analyticsId: process.env.ANALYTICS_ID,
        };
        const projectId = req.body.projectId;
        if (projectId !== undefined) {
            res.json({
                projectId: projectId,
                storageUrl: {
                    application: `${process.env.STORAGE_URL}/${projectId}`,
                    common: `${process.env.COMMON_STORAGE_URL}/${projectId}`,
                },
                ...response,
            });
            return;
        }
        res.json({
            projectId:
                process.env.PROJECT_ID === undefined
                    ? ''
                    : process.env.PROJECT_ID,
            storageUrl:
                process.env.PROJECT_STORAGE_URL === undefined
                    ? {
                          application: '',
                          common: `${process.env.COMMON_STORAGE_URL}`,
                      }
                    : {
                          application: process.env.PROJECT_STORAGE_URL,
                          common: `${process.env.COMMON_STORAGE_URL}`,
                      },
            ...response,
        });
    } catch (error) {
        log('project', error.message);
        res.status(NOT_FOUND);
        res.json({ error: error.message });
    }
});

/**
 * サーバータイム取得
 */
router.get('/serverTime', (_req, res) => {
    log('serverTime');
    res.json({ date: moment().toISOString() });
});

/**
 * バージョン取得
 */
router.get('/version', (_req, res) => {
    log('version');
    res.json({ version: process.env.VERSION });
});

/**
 * ヘルスチェック
 */
router.get('/health', (_req, res) => {
    res.status(httpStatus.OK);
    res.send(`${httpStatus.OK} ${httpStatus[200]}`);
});

/**
 * ログ出力
 */
router.post('/logging', (req, res) => {
    log('logging');
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        transports: [new winston.transports.Console()],
    });
    logger.info('[log] client log', req.body);
    res.json();
});

export const utilRouter = router;
