var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var ApiUtil = require('../../util/apiUtil');

var ToyDetail = React.createClass({
  getInitialState: function () {
    return {
      toy: this.getStateFromStore(parseInt(this.props.params.pokemonId))
    };
  },
  componentDidMount: function () {
    this.toyToken = PokemonStore.addListener(this._updateState);
  },
  componentWillUnmount: function () {
    this.toyToken.remove();
  },
  _updateState: function () {
    this.setState({toy: this.getStateFromStore(parseInt(this.props.params.pokemonId))});
  },
  getStateFromStore: function (id) {
    var pokemon = PokemonStore.find(id);

    var toy = "";
    if ( typeof pokemon !== "undefined"
     && typeof pokemon.toys !== "undefined"
      ){
      for (var i = 0; i < pokemon.toys.length; i++) {
        if (parseInt(this.props.params.toyId) === pokemon.toys[i].id){
          toy = pokemon.toys[i];
        }
      }
    }
    return toy;
  },
  componentWillReceiveProps: function (nextProps) {
    var pokemonId = parseInt(nextProps.params.pokemonId);
    ApiUtil.fetchSinglePokemon(pokemonId);
  },
  render: function(){
    return (
      <div>
        <img src={this.state.toy.image_url}></img>
      </div>
    );
  }
});

module.exports = ToyDetail;
