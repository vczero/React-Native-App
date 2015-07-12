/**
 * Created by vczero on 15/7/12.
 */

var React = require('react-native');
var WebView = require('./about/webview');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} = React;


var About = React.createClass({

  render: function(){
    return (
      <ScrollView style={styles.container}>

        <View style={styles.wrapper}>
          <Image style={styles.avatar} source={{uri:'https://avatars3.githubusercontent.com/u/6133685?v=3&s=100'}}></Image>
          <Text>author: vczero</Text>
          <TouchableOpacity onPress={this._openWebView}>
            <Text>https://github.com/vczero/React-Native-App</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  },

  _openWebView: function(){
    this.props.navigator.push({
      title:'项目地址',
      component: WebView,
      passProps:{
        url: 'https://github.com/vczero/React-Native-App'
      }
    });
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
  },
  wrapper:{
    alignItems:'center',
    marginTop:50,
  },
  avatar:{
    width:100,
    height:100,
  }
});

module.exports = About;