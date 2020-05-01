let button = document.getElementById('button_form')
// let fakeAuthBtn = document.getElementById('fakeAuthBtn')
let fakeRegBtn = document.getElementById('fakeRegBtn')

button.onclick = function () {                               //Форма входа
   let cover = document.createElement('div')        //Прозрачный фон
    cover.id = 'cover-div'
    document.body.appendChild(cover)
    let form_auth = document.getElementById('form_auth')
    cover.appendChild(form_auth)
    form_auth.style.display = 'block'
}

fakeRegBtn.onclick = function () {
    let form_auth = document.getElementById('form_auth')
    let form_reg = document.getElementById('form_reg')
    let cover = document.getElementById('cover-div')
    let email_holder = document.getElementById('exampleInputEmail1reg')
    email_holder.value = document.getElementById('exampleInputEmail1').value
    cover.appendChild(form_reg)
    form_auth.style.display = 'none'
    form_reg.style.display = 'block'
}

function auth() {

}



//
// function fakeAuth() {                                                           //Хардкод по условия задачи
//     let email_auth = document.getElementById('exampleInputEmail1')
//     let pass_auth = document.getElementById('exampleInputPassword1')
//     if ((email_auth.value) == 'test@yandex.ru'){
//         alert('норм')
//     }else {alert('не то')}
// }


