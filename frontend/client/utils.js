function getToken() {
  return localStorage.getItem("token");
}

function deleteToken() {
  localStorage.removeItem("token");
}

export { getToken, deleteToken };
