let API_HOST;


// TODO: add your prod hostname
const url = "django-svelte.herokuapp.com";

// toggle this to true to ping the
// prod DB when developing locally
const prodDatabase = false;
const hostname = window && window.location && window.location.hostname;

if (hostname === url || prodDatabase) {
    API_HOST = "https://" + url;
} else {
    API_HOST = "http://127.0.0.1:8000";
}

export { API_HOST };