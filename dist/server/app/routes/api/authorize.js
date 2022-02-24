"use strict";
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
exports.authorizeRouter = void 0;
/**
 * 認証API
 */
const debug = require("debug");
const express = require("express");
const base_1 = require("../../functions/base");
const oAuth2_1 = require("../../models/session/oAuth2");
const router = express.Router();
const log = debug('application: /api/authorize');
/**
 * 認証情報取得
 */
router.post('/getCredentials', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    log('getCredentials', req.body.member);
    try {
        const endpoint = process.env.API_ENDPOINT;
        const waiterServerUrl = process.env.WAITER_SERVER_URL;
        const authModel = new oAuth2_1.OAuth2(req.session.auth);
        const options = { endpoint, auth: authModel.create(req) };
        const accessToken = yield options.auth.getAccessToken();
        authModel.credentials = options.auth.credentials;
        authModel.save(req.session);
        const expiryDate = options.auth.credentials.expiry_date;
        const userName = options.auth.verifyIdToken({}).getUsername();
        const clientId = options.auth.options.clientId;
        res.json({
            accessToken,
            expiryDate,
            userName,
            clientId,
            endpoint,
            waiterServerUrl,
        });
    }
    catch (error) {
        base_1.errorProsess(res, error);
    }
}));
router.get('/signIn', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    log('signIn');
    if (req.session === undefined) {
        throw new Error('session is undefined');
    }
    delete req.session.auth;
    const authModel = new oAuth2_1.OAuth2(req.session.auth);
    const auth = authModel.create(req);
    const url = auth.generateAuthUrl({
        scopes: authModel.scopes,
        state: authModel.state,
        codeVerifier: authModel.codeVerifier,
    });
    delete req.session.auth;
    res.json({ url });
}));
router.get('/signOut', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    log('signOut');
    const authModel = new oAuth2_1.OAuth2(req.session.auth);
    const auth = authModel.create(req);
    const url = auth.generateLogoutUrl();
    log('url:', url);
    res.json({ url });
}));
exports.authorizeRouter = router;
