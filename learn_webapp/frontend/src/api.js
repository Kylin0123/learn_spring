function request(method, url, body) {
    let baseUrl = "http://localhost:8080/"
    url = baseUrl + url
    method = method.toUpperCase();
    if (method === 'GET') {
        // fetch的GET不允许有body，参数只能放在url中
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }
    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': ('Bearer ' + localStorage.getItem('jwtToken')) || '' // 从localStorageStorage中获取access token
        },
        body
    }).then(res => {
        if (res.status === 401) {
            window.history.replace('/login');
            return Promise.reject('Unauthorized.');
        }
        return res;
    })
}

export function login(username, password) {
    return request('POST', 'admin/login', {
        username: username,
        password: password
    })
        .then(res => res.json())
        .catch(err => console.error(err))
    //    .catch(err => console.error(err))
    //return fetch(`http://localhost:8080/admin/login?username=${username}&password=${password}`, {
    //    headers: {
    //        'content-type': 'application/x-www-form-urlencoded'
    //    },
    //    method: "POST",
    //    mode: 'cors'
    //})
    //    .then(res => res.json())
    //    .catch(err => console.error(err))
}

export function getUsers() {
    return request('GET', 'admin/users')
        .then(res => res.json())
        .then(res => {
            alert(JSON.stringify(res))
        })
        .catch(err => {
            console.log(err)
        });
}

export function getUser(id) {
    return request('GET', `admin/user?id=${id}`)
        .then(res => res.json())
        .catch(err => {
            console.log(err)
        });
}

export default function version() {
    console.log("This is api version 1.0.");
};
