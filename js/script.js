let form = document.querySelector('form')
form.addEventListener('submit', async (e) => {
    e.preventDefault()

    let listEvolv = document.querySelector('#listOfEvolv')
    listEvolv.innerHTML = ""
    
    let search = document.querySelector('#search').value
    let infos = await searchForPokemon(search)
    
    let answerImg = document.querySelector('.img')
    answerImg.style.backgroundImage = `url(${infos.pokeUrl})`

    let pId = document.querySelector('#id')
    pId.innerText = '#' + infos.txtId
    
    let pName = document.querySelector('#name')
    pName.innerText = infos.txtName
    
    let pType = document.querySelector('#type')
    pType.textContent = infos.txtType
    
    let pokeSpecies = await (await fetch(`https://pokeapi.co/api/v2/pokemon-species/${search}/`)).json()
    let evolveChainUrl = pokeSpecies.evolution_chain.url
    let evolvChain = await (await fetch(evolveChainUrl)).json()
    const chain = Array(evolvChain.chain)
    
    evolvInfos(chain)

    async function searchForPokemon (idSearch) {
        let resposta
        try {
            resposta = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${idSearch}/`)).json()
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
        catch {
            alert('pokemon Not Found :/ ')
        }
    }
        
    async function evolvInfos (list) {
        await list.forEach(async e =>{
            const infos = await searchForPokemon(e.species.name)
            listEvolv.appendChild(addLi(infos))
            if (e.evolves_to !== '') {
                evolvInfos(e.evolves_to)
            }
        })
    }

    function addLi (infos) {
        let li = document.createElement('li')
        let spanImg = document.createElement('span')
        spanImg.classList.add('img')
        spanImg.style.backgroundImage = `url(${infos.pokeUrl})`
        li.appendChild(spanImg)
        
        let p = document.createElement('p')
        let spanId = document.createElement('span')
        spanId.textContent = '#' + infos.txtId
        let spanName = document.createElement('span')
        spanName.textContent = infos.txtName
        spanName.classList.add('capitalize')
        p.appendChild(spanId)
        p.innerHTML += ' | ' 
        p.appendChild(spanName)
        li.appendChild(p)

        return li
    }
})