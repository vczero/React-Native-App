
var React = require('react-native');
var Util = require('./../util');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  } = React;

var ModifyUser = React.createClass({

  render: function(){
    return (
      <ScrollView>

        <View style={{height:35, marginTop:30,}}>
          <TextInput style={styles.input} password={true} placeholder="原始密码"/>
        </View>

        <View style={{height:35,marginTop:5}}>
          <TextInput style={styles.input} password={true} placeholder="新密码"/>
        </View>

        <View>
          <TouchableOpacity onPress={this._resetPassword}>
            <View style={styles.btn}>
              <Text style={{color:'#FFF'}}>修改密码</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  },

  _resetPassword: function(){

  }

});

var styles = StyleSheet.create({
  input:{
    flex:1,
    marginLeft:20,
    marginRight:20,
    height:35,
    borderWidth:1,
    borderColor:'#ddd',
    borderRadius:4,
    paddingLeft:5,
    fontSize:13,
  },
  btn:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    backgroundColor:'#1DB8FF',
    height:38,
    marginLeft:20,
    marginRight:20,
    borderRadius:4,
  }
});


module.exports = ModifyUser;