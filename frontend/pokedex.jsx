var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var App = require('./components/app');
var ApiUtil = require('./util/apiUtil');

var PokemonDetail = require('./components/pokemons/pokemonDetail');
var ToyDetail = require('./components/toys/toyDetail');

var routes = (
  <Route path='/' component={App}>
    <Route path='pokemon/:pokemonId' component={PokemonDetail}>
      <Route path='toys/:toyId' component={ToyDetail}></Route>
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Router>{routes}</Router>
  , document.getElementById("root"));
});
