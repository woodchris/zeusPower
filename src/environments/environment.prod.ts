export const environment = {
  production: true
};


export let APIURL = '';

switch (window.location.hostname) {
  case '': APIURL = ''
    break;
  default:
    APIURL = 'http://localhost:4200';
}