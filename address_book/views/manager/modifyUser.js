
var React = require('react-native');
var Util = require('./../util');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  } = React;

var ModifyUser = React.createClass({

  render: function(){
    return (
      <ScrollView>
        <View>
          <Text>modify</Text>
        </View>
      </ScrollView>
    );
  }

});


module.exports = ModifyUser;