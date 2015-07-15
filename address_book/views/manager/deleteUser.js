
var React = require('react-native');
var Util = require('./../util');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  } = React;

var DeleteUser = React.createClass({

  render: function(){
    return (
      <ScrollView>
        <View>
          <Text>delete</Text>
        </View>
      </ScrollView>
    );
  }

});


module.exports = DeleteUser;