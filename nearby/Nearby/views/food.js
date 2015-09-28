
var React = require('react-native');
var List = require('./list');
var Food = React.createClass({
  render: function(){
    return(
      <List type="餐饮" nav={this.props.navigator}/>
    );
  }
});
module.exports = Food;

