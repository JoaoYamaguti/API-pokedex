let form = document.querySelector('form')
form.addEventListener('submit', async (e) => {
    e.preventDefault()

    async function searchForPokemon (idSearch) {
        let resposta = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${idSearch}/`)).json()
        console.log(resposta)
        const {sprites, id, name, types} = resposta

        let txtType = ''
        types.forEach(element => {
            txtType += element.type.name + ' '
        })

        let info = {
            pokeUrl : sprites.front_default,
            txtId : id,
            txtName : name,
            txtType : txtType
        }
        return info
    }

    let search = document.querySelector('#search').value
    let infos = await searchForPokemon(search)
    console.log(infos)

    let answerImg = document.querySelector('.img')
    answerImg.style.backgroundImage = `url(${infos.pokeUrl})`

    let pId = document.querySelector('#id')
    pId.innerText = '#' + infos.txtId

    let pName = document.querySelector('#name')
    pName.innerText = infos.txtName

    let pType = document.querySelector('#type')
    pType.textContent = infos.txtType


//     fetch(`https://pokeapi.co/api/v2/pokemon-species/${search}/`).then(r => {return r.json()}).then(specie => {
//         fetch(`${specie.evolution_chain.url}`).then(r => {return r.json()}).then(evolutions => {
//             console.log(evolutions)

//             let main = document.querySelector('main')
//             let sectionEvolv = document.createElement('section')
//             sectionEvolv.classList.add('evolution')
//             let listEvolv = document.createElement('ul')

            

//             // do {
//             //     evolutions.chain.evolves_to.forEach(e => {
//             //         e.species.name
//             //     })
//             // } while (condition);

//             sectionEvolv.appendChild(listEvolv)
//             main.appendChild(sectionEvolv)
//         })
//     })
})

// function addLi () {
//     let liEvolv = document.createElement('li')
//     let spanImg = document.createElement('span')
//     spanImg.style.backgroundImage = `url(${})`
// }
