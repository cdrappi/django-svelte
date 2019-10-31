import { API_HOST } from "./api.js"

function fetchUserData(token) {
    return fetch(`${API_HOST}/self/`, {
        headers: {
            Authorization: `JWT ${token}`
        }
    })
}

function fetchAuthToken(username, password) {
    return fetch(`${API_HOST}/token/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
}

function fetchCreateUser(username, password) {
    return fetch(`${API_HOST}/users/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
}

function fetchCsrfToken(token) {
    return fetch(`${API_HOST}/csrf/`, {
        method: "GET",
        headers: {
            Authorization: `JWT ${token}`
        }
    })
}

function validateInputs(usernameInput, passwordInput) {
    if (usernameInput && passwordInput) {
        return true;
    } else {
        isMessageError = true;
        if (!usernameInput && !passwordInput) {
            message = "Username and password cannot be blank";
        } else if (!usernameInput) {
            message = "Username cannot be blank";
        } else if (!passwordInput) {
            message = "Password cannot be blank";
        }
        return false;
    }
}
export { validateInputs, fetchUserData, fetchAuthToken, fetchCreateUser, fetchCsrfToken }