var ApiActions = require('../actions/ApiActions');

var ApiUtils = {
  fetchAllPokemons: function(){
    $.get(
      "api/pokemon",
      {},
      function(pokemons){
        ApiActions.receiveAllPokemons(pokemons);
      }
    );
  },
  fetchSinglePokemon: function(id){
    $.get(
      "api/pokemon/" + id,
      {},
      function(pokemon){
        ApiActions.receiveSinglePokemon(pokemon);
      }
    );
  }
};

module.exports = ApiUtils;
