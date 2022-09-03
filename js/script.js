let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    let search = document.querySelector('#search').value
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}/`).then(r => {return r.json()}).then(API => {
        console.log(API)
        let answerImg = document.querySelector('.img')
        answerImg.style.backgroundImage = `url(${API.sprites.front_default})`

        let pId = document.querySelector('#id')
        pId.innerText = '#' + API.id

        let pName = document.querySelector('#name')
        pName.innerText = API.name

        let pType = document.querySelector('#type')
        pType.textContent = ""
        API.types.forEach(element => {
            let pokeType = element.type.name
            pType.textContent += pokeType + ' '
        });       
    })
})

