let login = document.getElementById('li-login')
let registration = document.getElementById('li-reg')


function login_form() {                                                             //Форма аутентификации
    let cover = document.getElementById('cover')                            //Прозрачный фон
    cover.style.display = "flex"                                                     //Проявить форму
    let form_auth = document.getElementById('form_auth')
    cover.appendChild(form_auth)
    form_auth.style.display = 'block'
    form_reg.style.display = 'none'
}

function registration_form() {                                                    //Форма регистрации
    document.getElementById('input-register-username').value = document.   //Перенос значений из формы
    getElementById('input-login-email').value                              //аутентификации
    document.getElementById('input-register-email').value = document.
    getElementById('input-login-email').value

    cover = document.getElementById('cover')
    cover.style.display = "flex"
    let form_auth = document.getElementById('form_auth')
    let form_reg = document.getElementById('form_reg')
    document.body.appendChild(cover)
    cover.appendChild(form_reg)
    form_auth.style.display = 'none'
    form_reg.style.display = 'flex'
}

function close_form(){
    document.getElementById('cover').style.display = "none"

}