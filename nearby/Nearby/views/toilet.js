
var React = require('react-native');
var List = require('./list');
var Toilet = React.createClass({
  render: function(){
    return(
      <List type="厕所" nav={this.props.navigator}/>
    );
  }
});

module.exports = Toilet;

