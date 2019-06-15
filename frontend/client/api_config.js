let API_HOST;

const prodDatabase = false;

const hostname = window && window.location && window.location.hostname;
// TODO:add your prod host
const url = ".herokuapp.com";

if (hostname === url || prodDatabase) {
  API_HOST = "https://" + url;
} else {
  API_HOST = "http://127.0.0.1:8000";
}

export default API_HOST;
