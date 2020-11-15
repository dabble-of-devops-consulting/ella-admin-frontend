const apiDomain = 'api.ella.ronasit.com';
const apiURL = 'http://' + apiDomain;

export const configuration = {
  production: false,
  language: {
    available: ['en'],
    default: 'en'
  },
  api: {
    url: apiURL + '/api/v1',
    unauthorized_routes: [
      apiURL + '/users/actions/login/',
      apiURL + '/users/actions/forgot-password'
    ]
  },
  notifications: {
    positionClass: 'inline',
    disableTimeOut: true,
    tapToDismiss: false
  }
};
