var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');

var ApiActions = {
  receiveAllPokemons: function(pokemons){
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },
  receiveSinglePokemon: function(pokemon){
    Dispatcher.dispatch({
      actionType: PokemonConstants.SINGLE_POKEMON_RECEIVED,
      pokemon: pokemon
    });
  }
};

module.exports = ApiActions;
