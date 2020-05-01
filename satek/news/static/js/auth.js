function fakeAuth() {                                                               //Хардкод по условию задачи
    let email_auth = document.getElementById('input-login-email')
    let pass_auth = document.getElementById('input-login-password')
    if (((email_auth.value) == 'test@yandex.ru') && ((pass_auth.value) == 'EFNJisfUT')) {
        auth()
    } else {
        alert('не то')
    }
}

async function auth() {                                                         //Авторизация
    let response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: document.getElementById('input-login-email').value,
            password: document.getElementById('input-login-password').value
        })
    });
    if (response.ok) {                                                           //Работа с токеном
        let login = await response.json();
        localStorage.token = login.token
        location.reload()
    } else {
        let error = await response.json();
        console.log(error);
        alert('Неправильно введен логин или пароль')
    }
}

async function register() {                                                     //Регистрация учетной записи
    let response = await fetch('http://127.0.0.1:8000/api/registration/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: document.getElementById('input-register-username').value,
            password: document.getElementById('input-register-password').value,
            password_confirm: document.getElementById('input-register-password_confirm').value,
            email: document.getElementById('input-register-email').value
        })
    });

    if (response.ok) {
        let login = await response.json();
        localStorage.token = login.token
        location.reload()
    } else {
        let error = await response.json();
        alert(error);
    }
}

document.getElementById('li-logout').onclick = function () {            //Выход из учетной записи
    delete localStorage.token
    location.reload()
}