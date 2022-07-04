const apiUrl = 'https://api.nomoreparties.co/beatfilm-movies'

function errCheck(res) {
    if(res.ok) {
        return res.json()
    }
    return Promise.reject(res.status)
}


export default function getAllMovies() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          }
    })
    .then(errCheck)
}

