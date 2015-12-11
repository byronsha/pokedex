var React = require('react');
var History = require('react-router').History;

var PokemonStore = require('../../stores/pokemon');
var PokemonIndexItem = require('./pokemonIndexItem');
var ApiUtil = require('../../util/apiUtil');

var PokemonsIndex = React.createClass({
  mixins: [History],
  getInitialState: function(){
    return { pokemons: PokemonStore.all() };
  },
  _onChange: function(){
    this.setState({ pokemons: PokemonStore.all()});
  },
  componentDidMount: function(){
    PokemonStore.addListener(this._onChange);
    ApiUtil.fetchAllPokemons();
  },
  componentWillUnmount: function(){
    PokemonStore.removeListener(this._onChange);
  },
  showDetail: function(id){
    this.history.push("/pokemon/" + id);
  },
  render: function(){
    var that = this;
    var pokemons = this.state.pokemons.map(function (pokemon, i) {
      return <li
        onClick={that.showDetail.bind(that, pokemon.id)}
        key={i}
        className="poke-list-item">
        <PokemonIndexItem key={i} pokemon={pokemon}/>
      </li>;
    });

    return (
      <div>
        <ul>
          {pokemons}
        </ul>
      </div>
    );
  }


});

module.exports = PokemonsIndex;
