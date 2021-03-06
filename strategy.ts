import { Strategy } from "passport-google-oauth20";

export const builder = (
	processOAuthCallback,
	callbackURL,
	clientID,
	clientSecret
): any => {
	const strategy = (models: any): Strategy =>
		// FIXME: need to do error checking of url, id, secret
		// if (!GOOGLE_CLIENT_ID) {
		// 	throw new Error('GOOGLE_CLIENT_ID not set');
		// }
		// if (!GOOGLE_CLIENT_SECRET) {
		// 	throw new Error('GOOGLE_CLIENT_SECRET not set');
		// }
		// if (!GOOGLE_CLIENT_SECRET) {
		// 	throw new Error('GOOGLE_CLIENT_SECRET not set');
		// }
		new Strategy(
			{
				callbackURL,
				clientID,
				clientSecret,
				passReqToCallback: false,
				scope: ["openid", "profile", "email"]
			},
			(accessToken, refreshToken, profile, done) => {
				void processOAuthCallback(models, profile, done);
			}
		);
	return strategy;
};
