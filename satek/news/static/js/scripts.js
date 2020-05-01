async function sub_render() {                                          //Генерация страницы
    let response = await fetch('http://127.0.0.1:8000/api/news/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.token,
        }
    });
    if (response.ok) {
        let data = await response.json()
        data.forEach(function (element, i, data) {
            generate_block(data, i)
        })
    } else {
        document.body.innerHTML += 'Вы не вошли в свою учетную запись'
    }
}



function generate_block(raw_data, counter) {                         //Генерация блока
    let article_block = document.createElement("div")       //Родительский блок
    article_block.className = 'col col-md-8'                        //Присвоение CSS селектора
    article_block.id = 'article_block'                              //Присвоение CSS селектора


    let article_title = document.createElement("div")      //Блок заголовка
    article_title.className = 'article_title'                       //
    article_title.id = 'article_title'                              //
    article_title.innerHTML = raw_data[counter].title               //
    article_block.appendChild(article_title)                        //End block

    let article_text = document.createElement("div")       //Текст
    article_text.className = 'article_text'
    article_text.id = 'article_text'
    article_text.innerHTML = raw_data[counter].text
    article_block.appendChild(article_text)

    let article_image = document.createElement("img")      //Картинка
    article_image.id = 'article_image'
    if (raw_data[counter] == null) {
        article_image.src = 'data:image/jpeg;base64,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'
    } else {
        article_image.src = raw_data[counter].picture
    }
    article_image.width = 400
    article_text.prepend(article_image)


    let publication = document.createElement("div")      //Подпись
    publication.className = 'publication'
    publication.id = 'publication'
    date = (raw_data[counter].pub_date).substring(0,10) + ' '
    date += raw_data[counter].pub_date.substring(11,19)
    publication.innerHTML = raw_data[counter].author.username + '//' + date
    article_block.appendChild(publication)

    document.body.appendChild(article_block)                     //Конец родистеского блока
}


sub_render()
