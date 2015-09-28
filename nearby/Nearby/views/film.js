
var React = require('react-native');
var List = require('./list');
var Film = React.createClass({
  render: function(){
    return(
      <List type="电影院" nav={this.props.navigator}/>
    );
  }
});

module.exports = Film;
