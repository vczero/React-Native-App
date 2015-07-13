/**
 * Created by lihua on 15/7/13.
 */

var React = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  } = React;

var Detail = React.createClass({
  render: function(){
    return (
      <ScrollView>
        <Text>{this.props.content}</Text>
      </ScrollView>
    );
  }
});


module.exports = Detail;