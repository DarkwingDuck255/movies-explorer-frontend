const baseUrl = 'http://api.darkwingduck-diplom.nomoredomains.work';

// const baseUrl = 'http://localhost:3000'

function errCheck(res) {
  if (res.ok) {
    return res.json()
  }

  return Promise.reject(`Ошибка API -> ${res.status}`)
}

export function register({ name, email, password }) {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      // 'Accept': "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  })
    .then((res) => {
      return errCheck(res)
    })
}

export function login({ email, password }) {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: email, password: password })
  })
    .then((res) => {
      return errCheck(res)
    })
    .then((data) => {
      if (data) {
        localStorage.setItem('token', data.token);
      }
      console.log(data)
      return data;

    })
}

export function getUserFromSrv(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    }
  })
    .then((res) => {
      return errCheck(res)
    })
}

export function patchUser(token, user) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email
    })
  })
    .then((res) => {
      return errCheck(res)
    })
}

export function checkToken(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then((res) => {
      return errCheck(res)
    })

}

export function saveMovie(movie, token) {
  return fetch(`${baseUrl}/movies`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      duration: movie.duration,
      movieId: movie.id,
      description: movie.description,
      year: movie.year,
      director: movie.director,
      country: movie.country,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      trailerLink: movie.trailerLink || `https://www.youtube.com/results?search_query=трейлер+${movie.nameRU}`,
    })
  })
    .then((res) => {
      return errCheck(res)
    })
}

export function deleteSavedMovie(movie, token) {
  return fetch(`${baseUrl}/movies/${movie._id}`, {
    method: 'DELETE',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  })
    .then((res) => {
      console.log(movie._id)
      return errCheck(res)
    })
}

export function getSavedMovies(token) {
  return fetch(`${baseUrl}/movies`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then((res) => {
      return errCheck(res)
    })
}
