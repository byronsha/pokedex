var React = require('react');
var ToyIndexItem = require('./toyIndexItem');

var ToysIndex = React.createClass({
  render: function () {
    var that = this;

    if (typeof this.props.toys !== "undefined") {
      return (
        <ul>
          {
            this.props.toys.map(function(toy, id){
              return (
                <ToyIndexItem
                  pokemon={that.props.pokemon}
                  toy={toy}
                  key={id} />
              );
            })
          }
        </ul>
      );
    } else {
      return <div/>;
    }
  }
});

module.exports = ToysIndex;
