var React = require('react');
var PokemonIndex = require('./pokemonsIndex');

var PokemonIndexItem = React.createClass({
  render: function(){
    var pokemonId = this.props.pokemon.id;
    if (pokemonId.toString().length === 1){
      pokemonId = "00" + pokemonId;
    } else if (pokemonId.toString().length === 2){
      pokemonId = "0" + pokemonId;
    }
    return(
      <div>
        {pokemonId}: {this.props.pokemon.name}
      </div>
    );
  }
});

module.exports = PokemonIndexItem;
