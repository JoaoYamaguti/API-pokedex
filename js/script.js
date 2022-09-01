let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    let search = document.querySelector('#search').value
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}/`).then(r => {return r.json()}).then(API => {
        console.log(API)

        document.querySelector('#id').textContent = '#' + API.id
        
        document.querySelector('#name').textContent = API.name

        console.log(document.querySelector('#id'))
    })

})