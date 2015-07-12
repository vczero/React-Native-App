/**
 * Created by lihua on 15/7/12.
 */

var React = require('react-native');
var {
  View,
  Text,
} = React;


var Address = React.createClass({
  render: function(){
    return (
      <View style={{flex:1, marginTop:64}}>
        <Text>
          {this.props.type}
        </Text>
      </View>
    );
  }
});


module.exports = Address;