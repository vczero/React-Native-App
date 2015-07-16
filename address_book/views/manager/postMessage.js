
var React = require('react-native');
var Util = require('./../util');

var {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  } = React;

var PostMessage = React.createClass({

  render: function(){
    return (
      <ScrollView >
        <View>
          <TextInput multiline={true} style={styles.textinput} placeholder="请输入公告内容"/>
        </View>
        <View style={{marginTop:20}}>
          <TouchableOpacity>
            <View style={styles.btn}>
              <Text style={{color:'#fff'}}>发布公告</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  },

  _postMessage: function(){

  }

});

var styles = StyleSheet.create({
  textinput:{
    flex:1,
    height:100,
    borderWidth:1,
    borderColor:'#ddd',
    marginTop:30,
    marginLeft:20,
    marginRight:20,
    paddingLeft:8,
    fontSize:13,
    borderRadius:4
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1DB8FF',
    height:38,
    marginLeft:20,
    marginRight:20,
    borderRadius:4,
  }
});


module.exports = PostMessage;