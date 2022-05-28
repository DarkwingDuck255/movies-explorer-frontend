const baseUrl = 'http://localhost:3000';


function errCheck(res) {
    if(res.ok) {
        return res.json()
    }

    return Promise.reject(`Ошибка API -> ${res.status}`)
}

export function register({name, email, password}) {
    return fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: {
            // 'Accept': "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, password})
    })
    .then((res) => {
      return errCheck(res)
    })
}

export function login(data) {
    return fetch(`${baseUrl}/signin`, {
        method: 'POST',
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
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
        "Authorization" : `Bearer ${token}`
      }
    })
    .then((res) => {
      return errCheck(res)
    })

}
