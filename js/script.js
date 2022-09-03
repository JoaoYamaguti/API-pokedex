let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    let search = document.querySelector('#search').value
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}/`).then(r => {return r.json()}).then(API => {
        console.log(API)
        let answerImg = document.createElement('img')
        answerImg.setAttribute('alt', `${API.nome}`)
        answerImg.src = API.sprites.front_default

        let sectionAnswer = document.querySelector('.answer')
        sectionAnswer.innerHTML = ''
        sectionAnswer.appendChild(answerImg)
        
        let vertLine = document.createElement('div')
        vertLine.classList.add('verticalLine')
        sectionAnswer.appendChild(vertLine)

        let div = document.createElement('div')

        let pId = document.createElement('p')
        pId.setAttribute('id', 'id')
        pId.innerText = '#' + API.id
        div.appendChild(pId)

        let pName = document.createElement('p')
        pName.setAttribute('id', 'id')
        pName.innerText = API.name
        div.appendChild(pName)
        
        sectionAnswer.appendChild(div)

        let pType = document.createElement('p')
        // continuar type
    })
})