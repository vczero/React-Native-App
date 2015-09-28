
var React = require('react-native');
var List = require('./list');
var Bank = React.createClass({
  render: function(){
    return(
      <List type="银行" nav={this.props.navigator}/>
    );
  }
});

module.exports = Bank;
