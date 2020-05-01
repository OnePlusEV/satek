async function is_auth() {                                          //Генерация страницы
    let response = await fetch('http://127.0.0.1:8000/api/news/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token '+ localStorage.token ,
        }
    });
    if (response.ok) {
        document.getElementById('li-login').style.display = 'none'
        document.getElementById('li-reg').style.display = 'none'
        document.getElementById('li-logout').style.display = 'flex'
    } else {
        document.getElementById('li-login').style.display = 'flex'
        document.getElementById('li-reg').style.display = 'flex'
        document.getElementById('li-logout').style.display = 'none'
    }
}

is_auth()