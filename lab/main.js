'use strict';

var itemsPokemon = document.querySelector('.items');
var blockPopup = document.querySelector('.pop__up');
fetch('https://pokeapi.co/api/v2/pokemon', {
  method: 'GET'
}).then(function (res) {
  return res.json();
}).then(function (res) {
  return buildItems(res.results);
});
function buildItems(pokemons) {
  pokemons.forEach(function (item) {
    var pokemonElement = document.createElement('p');
    pokemonElement.addEventListener('click', clickPokemon);
    pokemonElement.className = 'name__pokemon';
    pokemonElement.innerText = item.name;
    itemsPokemon.append(pokemonElement);
  });
}
function clickPokemon(event) {
  var opisanie = event.target.innerText;
  fetch("https://pokeapi.co/api/v2/pokemon/".concat(opisanie), {
    method: 'GET'
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return addPopup(res);
  });
}
function addPopup(item) {
  var popDelet = blockPopup.children.length;
  for (var i = 0; i < popDelet; i++) {
    blockPopup.lastElementChild.remove();
  }
  var popup = document.createElement('div');
  var btn = document.createElement('button');
  var imgPokemon = document.createElement('img');
  btn.addEventListener('click', function () {
    popup.style.display = 'none';
  });
  btn.innerText = 'Закрити';
  popup.innerHTML = "<p>\u041F\u043E\u043A\u0435\u043C\u043E\u043D: ".concat(item.name, "</p>\n    <p>\u0417\u0440\u0456\u0441\u0442 \u043F\u043E\u043A\u0435\u043C\u043E\u043D\u0430: ").concat(item.height, "</p>\n    <p>\u0412\u0430\u0433\u0430 \u043F\u043E\u043A\u0435\u043C\u043E\u043D\u0430: ").concat(item.weight, "</p>");
  popup.className = 'pop';
  imgPokemon.src = item.sprites.front_default;
  popup.append(imgPokemon);
  blockPopup.append(popup);
  popup.append(btn);
}