export const API_BASE_URL = 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
//export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI+"&userId="+"testUser";
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + encodeURIComponent(OAUTH2_REDIRECT_URI) + '&userId=1';


//export const FACEBOOK_INTEGRATION_AUTH_URL = API_BASE_URL + '/oauth2/authorize/integration/facebook?redirect_uri=' + encodeURIComponent(OAUTH2_REDIRECT_URI) + '&token=jdbshfjbdshjfbjhfds';