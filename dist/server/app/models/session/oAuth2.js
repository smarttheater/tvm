"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2 = void 0;
const cinerino = require("@cinerino/sdk");
/**
 * 認証モデル
 * @class OAuth2
 */
class OAuth2 {
    /**
     * @constructor
     * @param {any} session
     */
    constructor(session) {
        if (session === undefined) {
            session = {};
        }
        this.scopes = [];
        this.credentials = session.credentials;
        this.state = OAuth2.STATE;
        this.codeVerifier = OAuth2.CODE_VERIFIER;
    }
    /**
     * 認証クラス作成
     * @memberof Auth2Model
     */
    create(req) {
        const auth = new cinerino.auth.OAuth2({
            domain: process.env.AUTHORIZATION_CODE_DOMAIN,
            clientId: process.env.AUTHORIZATION_CODE_CLIENT_ID,
            clientSecret: process.env.AUTHORIZATION_CODE_CLIENT_SECRET,
            redirectUri: `${req.protocol}://${req.hostname}/signIn`,
            logoutUri: `${req.protocol}://${req.hostname}/signOut`,
            state: this.state,
            scopes: this.scopes.join(' '),
        });
        if (this.credentials !== undefined) {
            auth.setCredentials(this.credentials);
        }
        return auth;
    }
    /**
     * セッションへ保存
     * @memberof Auth2Model
     * @method save
     * @returns {Object}
     */
    save(session) {
        const authSession = {
            state: this.state,
            scopes: this.scopes,
            credentials: this.credentials,
            codeVerifier: this.codeVerifier,
        };
        session.auth = authSession;
    }
}
exports.OAuth2 = OAuth2;
/**
 * 状態（固定値）
 */
OAuth2.STATE = 'STATE';
/**
 * 検証コード（固定値）
 */
OAuth2.CODE_VERIFIER = 'CODE_VERIFIER';
