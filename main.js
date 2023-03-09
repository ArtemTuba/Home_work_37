'use strict';

const itemsPokemon = document.querySelector('.items');
const blockPopup = document.querySelector('.pop__up')

fetch('https://pokeapi.co/api/v2/pokemon', {method: 'GET'})
    .then(res => res.json())
    .then(res => buildItems(res.results))

function buildItems(pokemons){
    pokemons.forEach(item => {
        const pokemonElement = document.createElement('p');
        pokemonElement.addEventListener('click', clickPokemon);
        pokemonElement.className = 'name__pokemon';
        pokemonElement.innerText = item.name;
        itemsPokemon.append(pokemonElement);
    })
}

function clickPokemon(event){
    const opisanie = event.target.innerText
    fetch(`https://pokeapi.co/api/v2/pokemon/${opisanie}`, {method: 'GET'} )
    .then(res => res.json())
    .then(res => addPopup(res))
}

function addPopup(item){
    const popDelet = blockPopup.children.length
    for(let i = 0; i < popDelet; i++){
        blockPopup.lastElementChild.remove()
    }
    const popup = document.createElement('div');
    const btn = document.createElement('button');
    const imgPokemon = document.createElement('img');
    btn.addEventListener('click', () => {
        popup.style.display = 'none'
    })
    btn.innerText = 'Закрити'
    popup.innerHTML = `<p>Покемон: ${item.name}</p>
    <p>Зріст покемона: ${item.height}</p>
    <p>Вага покемона: ${item.weight}</p>`
    popup.className = 'pop'
    imgPokemon.src = item.sprites.front_default;
    popup.append(imgPokemon)
    blockPopup.append(popup)
    popup.append(btn)
}
