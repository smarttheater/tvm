"use strict";
/**
 * API
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilRouter = void 0;
const debug = require("debug");
const express = require("express");
const http_status_1 = require("http-status");
const httpStatus = require("http-status");
const moment = require("moment");
const winston = require("winston");
const log = debug('application: /api/util');
const router = express.Router();
/**
 * プロジェクト設定取得
 */
router.post('/project', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
            res.json(Object.assign({ projectId: projectId, storageUrl: {
                    application: `${process.env.STORAGE_URL}/${projectId}`,
                    common: `${process.env.COMMON_STORAGE_URL}/${projectId}`,
                } }, response));
            return;
        }
        res.json(Object.assign({ projectId: process.env.PROJECT_ID === undefined
                ? ''
                : process.env.PROJECT_ID, storageUrl: process.env.PROJECT_STORAGE_URL === undefined
                ? {
                    application: '',
                    common: `${process.env.COMMON_STORAGE_URL}`,
                }
                : {
                    application: process.env.PROJECT_STORAGE_URL,
                    common: `${process.env.COMMON_STORAGE_URL}`,
                } }, response));
    }
    catch (error) {
        log('project', error.message);
        res.status(http_status_1.NOT_FOUND);
        res.json({ error: error.message });
    }
}));
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
 * パスワード検証
 */
router.post('/password', (req, res) => {
    log('password');
    if (req.body.password !== process.env.APP_PASSWORD) {
        res.statusCode = 401;
    }
    res.json();
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
exports.utilRouter = router;
