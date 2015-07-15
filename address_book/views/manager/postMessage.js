
var React = require('react-native');
var Util = require('./../util');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  } = React;

var PostMessage = React.createClass({

  render: function(){
    return (
      <ScrollView>
        <View>
          <Text>post</Text>
        </View>
      </ScrollView>
    );
  }

});


module.exports = PostMessage;