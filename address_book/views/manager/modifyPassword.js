
var React = require('react-native');
var Util = require('./../util');
var Service = require('../service');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  AlertIOS,
  AsyncStorage,
  } = React;

var ModifyUser = React.createClass({

  render: function(){
    return (
      <ScrollView>

        <View style={{height:35, marginTop:30,}}>
          <TextInput style={styles.input} password={true} placeholder="原始密码" onChangeText={this._getOldPassword}/>
        </View>

        <View style={{height:35,marginTop:5}}>
          <TextInput style={styles.input} password={true} placeholder="新密码" onChangeText={this._getNewPassword}/>
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

  _getOldPassword: function(val){
    this.setState({
      oldPassword: val
    });
  },

  _getNewPassword: function(val){
    this.setState({
      password: val
    });
  },

  _resetPassword: function(){
    var path = Service.host + Service.updatePassword;
    var that = this;
    console.log(that.state.password);
    //需要服务端确认login token
    AsyncStorage.getItem('token', function(err, data){
      if(!err){
        Util.post(path, {
          password: that.state.password,
          oldPassword: that.state.oldPassword,
          token: data,
        }, function(data){
          if(data.status){
            AlertIOS.alert('成功', data.data);
          }else{
            AlertIOS.alert('失败', data.data);
          }
        });
      }else{
        AlertIOS.alert('失败', data.data);
      }
    });
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