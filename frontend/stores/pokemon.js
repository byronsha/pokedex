var Store = require ("flux/utils").Store,
    PokemonConstants = require("../constants/pokemonConstants"),
    AppDispatcher = require('../dispatcher/dispatcher'),
    PokemonStore = new Store(AppDispatcher);

var _pokemons = {};

PokemonStore.all = function(){
  var returnArray = [];
  for (var id in _pokemons) {
    if (_pokemons.hasOwnProperty(id)) {
      returnArray.push(_pokemons[id]);
    }
  }
  return returnArray;
};

PokemonStore.find = function(id) {
  return _pokemons[id];
};

PokemonStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case PokemonConstants.POKEMONS_RECEIVED:
      PokemonStore.resetPokemons(payload.pokemons);
      break;
    case PokemonConstants.SINGLE_POKEMON_RECEIVED:
      PokemonStore.resetSinglePokemon(payload.pokemon);
      break;
  }
};

PokemonStore.resetSinglePokemon = function(pokemon){
  _pokemons[pokemon.id] = pokemon;
  // console.log(_pokemons[pokemon.id]);
  this.__emitChange();
};

PokemonStore.resetPokemons = function(pokemons){
  _pokemons = {};
  pokemons.forEach(function(pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
  this.__emitChange();
};




module.exports = PokemonStore;
