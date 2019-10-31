function getToken() {
    return localStorage.getItem("token");
}

function deleteToken() {
    localStorage.removeItem("token");
}

function setToken(token) {
    localStorage.setItem("token", token);
}

function getCsrfToken() {
    return localStorage.getItem("csrfToken");
}

function deleteCsrfToken() {
    localStorage.removeItem("csrfToken");
}

function setCsrfToken(token) {
    localStorage.setItem("csrfToken", token);
}

export { getToken, deleteToken, setToken, getCsrfToken, deleteCsrfToken, setCsrfToken };