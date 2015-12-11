var React = require('react');
var History = require('react-router').History;

var ToyIndexItem = React.createClass({
  mixins: [History],
  showToyDetail: function (id) {
    this.history.push("/pokemon/" + this.props.pokemon.id + "/toys/" + id);
  },
  render: function () {
    return (
      <li onClick={this.showToyDetail.bind(this, this.props.toy.id)} className="toy-list-item">
        <h4>{this.props.toy.name}</h4>
        Happiness: {this.props.toy.happiness}<br/>
        Price: ${this.props.toy.price}<br/>
      </li>
    );
  }
});

module.exports = ToyIndexItem;
