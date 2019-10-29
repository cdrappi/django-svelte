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

export { fetchUserData, fetchAuthToken }