/**
 * 認証API
 */
import * as debug from 'debug';
import * as express from 'express';
import { errorProsess } from '../../functions/base';
import { OAuth2 } from '../../models/session/oAuth2';
const router = express.Router();
const log = debug('application: /api/authorize');

/**
 * 認証情報取得
 */
router.post('/getCredentials', async (req, res) => {
    log('getCredentials', req.body.member);
    try {
        const endpoint = <string>process.env.API_ENDPOINT;
        const waiterServerUrl = <string>process.env.WAITER_SERVER_URL;
        const authModel = new OAuth2((<Express.Session>req.session).auth);
        const options = { endpoint, auth: authModel.create(req) };
        const accessToken = await options.auth.getAccessToken();
        authModel.credentials = options.auth.credentials;
        authModel.save(req.session);
        const expiryDate = options.auth.credentials.expiry_date;
        const userName = options.auth.verifyIdToken(<any>{}).getUsername();
        const clientId = options.auth.options.clientId;
        res.json({
            accessToken,
            expiryDate,
            userName,
            clientId,
            endpoint,
            waiterServerUrl,
        });
    } catch (error) {
        errorProsess(res, error);
    }
});

router.get('/signIn', async (req, res) => {
    log('signIn');
    if (req.session === undefined) {
        throw new Error('session is undefined');
    }
    delete req.session.auth;
    const authModel = new OAuth2(req.session.auth);
    const auth = authModel.create(req);
    const url = auth.generateAuthUrl({
        scopes: authModel.scopes,
        state: authModel.state,
        codeVerifier: authModel.codeVerifier,
    });
    delete req.session.auth;
    res.json({ url });
});

router.get('/signOut', async (req, res) => {
    log('signOut');
    const authModel = new OAuth2((<Express.Session>req.session).auth);
    const auth = authModel.create(req);
    const url = auth.generateLogoutUrl();
    log('url:', url);
    res.json({ url });
});

export const authorizeRouter = router;
