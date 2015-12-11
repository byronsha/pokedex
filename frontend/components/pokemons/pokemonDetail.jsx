var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var ApiUtil = require('../../util/apiUtil');
var ToysIndex = require('../toys/toysIndex');

var PokemonDetail = React.createClass({
  getInitialState: function () {
    return {
      pokemon: this.getStateFromStore()
    };
  },
  getStateFromStore: function (id) {
    return PokemonStore.find(id);
  },
  componentDidMount: function () {
    PokemonStore.addListener(this._updateState);
  },
  componentWillUnmount: function () {
    PokemonStore.removeListener(this._updateState);
  },
  _updateState: function () {
    this.setState({pokemon: this.getStateFromStore(parseInt(this.props.params.pokemonId))});
  },
  componentWillReceiveProps: function (nextProps) {
    var pokemonId = parseInt(nextProps.params.pokemonId);
    ApiUtil.fetchSinglePokemon(pokemonId);
  },
  capitalize: function (string) {
    capitalizedString = "";
    for (var i = 0; i < string.length; i++) {
      if (i === 0) {
        capitalizedString += string[i].toUpperCase();
      } else {
        capitalizedString += string[i];
      }
    }
    return capitalizedString;
  },
  render: function () {
    var currPokemon;
    var pokemonState = this.state.pokemon;


    if (pokemonState) {
      for (var i = 0; i < pokemonState.moves.length; i++) {
        pokemonState.moves[i] = this.capitalize(pokemonState.moves[i]);
      }
      currPokemon = (
        <div>
          <div><h1>{pokemonState.name}</h1></div>
          <br/>
          <div><b>Type: </b>{this.capitalize(pokemonState.poke_type)}</div>
          <div><b>Attack: </b>{pokemonState.attack}</div>
          <div><b>Defense: </b>{pokemonState.defense}</div>
          <br/>
          <img src={pokemonState.image_url}></img>
          <ul><b>Moves:</b>
            {pokemonState.moves.map(function (move, id) {
              return <li key={id}>{move}</li>;
            })
            }
          </ul>
          <ToysIndex toys={pokemonState.toys} pokemon={this.state.pokemon}/>
        </div>
      );
    } else {
      currPokemon = <div></div>;
    }
    return (
      <div>
        <div className="pokemon-detail-pane">
          <div className="detail">
            {currPokemon}
          </div>
        </div>
        {this.props.children}
      </div>
    );
  },
});

module.exports = PokemonDetail;
