var React = require('react-native');
var Util = require('./util');


var {
  StyleSheet,
  View,
  TabBarIOS,
  Text,
  NavigatorIOS,
  StatusBarIOS,
  TouchableHighlight,
  TextInput,
  Image,
  } = React;

var Login = React.createClass({

  render: function(){
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('image!logo')}></Image>
        </View>

        <View style={styles.inputRow}>
          <Text>邮箱</Text><TextInput style={styles.input} placeholder="请输入邮箱"/>
        </View>
        <View style={styles.inputRow}>
          <Text>密码</Text><TextInput style={styles.input} placeholder="请输入密码" password={true}/>
        </View>

        <View>
          <TouchableHighlight underlayColor="#fff" style={styles.btn} onPress={this._login}>
            <Text style={{color:'#fff'}}>登录</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  },

  _login: function(){
    console.log('');
  }

});


var styles = StyleSheet.create({
  container:{
    marginTop:50,
    alignItems:'center',
  },
  logo:{
    width:100,
    height:100,
    resizeMode: Image.resizeMode.contain
  },
  inputRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    marginBottom:10,
  },
  input:{
    marginLeft:10,
    width:220,
    borderWidth:Util.pixel,
    height:35,
    paddingLeft:8,
    borderRadius:5,
    borderColor:'#ccc'
  },
  btn:{
    marginTop:10,
    width:80,
    height:35,
    backgroundColor:'#3BC1FF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 4,
  }
});


module.exports = Login;

