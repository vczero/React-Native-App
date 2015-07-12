/**
 * Created by vczero on 15/7/12.
 */

var React = require('react-native');
var {
  View,
  Text,
  ScrollView,
  StyleSheet,
} = React;


var About = React.createClass({

  render: function(){
    return (
      <ScrollView style={styles.container}>
        <Text>关于</Text>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1
  }
});

module.exports = About;