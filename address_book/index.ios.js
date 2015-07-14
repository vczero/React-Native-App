'use strict';
var React = require('react-native');
var AdSupportIOS = require('AdSupportIOS');
var Home = require('./views/home');
var About = require('./views/about');
var Manager = require('./views/manager');
var Message = require('./views/message');
var Util = require('./views/util');
var Service = require('./views/service');

var {
  StyleSheet,
  View,
  TabBarIOS,
  Text,
  NavigatorIOS,
  AppRegistry,
  Image,
  TextInput,
  StatusBarIOS,
  ScrollView,
  TouchableHighlight,
  ActivityIndicatorIOS,
  AlertIOS,
  AsyncStorage,
} = React;



StatusBarIOS.setStyle('light-content');
var Address =  React.createClass({
  statics: {
    title: '主页',
    description: '选项卡'
  },

  getInitialState: function(){
    return {
      selectedTab: 'home',
      showIndex: {
        height:0,
        opacity:0
      },
      showLogin:{
        flex:1,
        opacity:1
      },
      isLoadingShow: false,
    };
  },

  componentDidMount: function(){
    var that = this;
    AsyncStorage.getItem('token', function(err, token){
      if(!err && token){
        that.setState({
          showLogin: {
            height:0,
            width:0,
            flex:0,
          },
          showIndex:{
            flex:1,
            opacity:1
          },
          isLoadingShow: false
        });
      }
    });
  },

  _selectTab: function(tabName){
    this.setState({
      selectedTab: tabName
    });
  },

  _addNavigator: function(component, title){
    return <NavigatorIOS
      style={{flex:1}}
      barTintColor='#007AFF'
      titleTextColor="#fff"
      tintColor="#fff"
      translucent={false}
      initialRoute={{
          component: component,
          title: title,
        }}
      />;
  },

  _getUserName: function(val){
    var username = val;
    this.setState({
      username: username
    });
  },

  _getPassword: function(val){
    var password = val;
    this.setState({
      username: password
    });
  },

  _login: function(){
    var username = this.state.username;
    var password = this.state.password;
    var path = Service.host + Service.login;
    var that = this;

    //隐藏登录页 & 加载loading
    that.setState({
      showLogin: {
        height:0,
        width:0,
        flex:0,
      },
      isLoadingShow: true
    });
    AdSupportIOS.getAdvertisingTrackingEnabled(function(){
      AdSupportIOS.getAdvertisingId(function(deviceId){
        Util.post(path, {
          email: 'wlhmyit@126.com',
          password: '123456',
          deviceId: deviceId,
        }, function(data){
          if(data.status){
            var user = data.data;
            //加入数据到本地
            AsyncStorage.multiSet([
              ['username', user.username],
              ['token', user.token],
              ['userid', user.userid],
              ['email', user.email],
              ['tel', user.tel],
              ['apartment', user.apartment],
              ['tag', user.tag],
            ], function(err){
              if(!err){
                that.setState({
                  showLogin: {
                    height:0,
                    width:0,
                    flex:0,
                  },
                  showIndex:{
                    flex:1,
                    opacity:1
                  },
                  isLoadingShow: false
                });
              }
            });

          }else{
            AlertIOS.alert('登录', '用户名或者密码错误');
            that.setState({
              showLogin: {
                flex:1,
                opacity:1
              },
              showIndex:{
                height:0,
                width:0,
                flex:0,
              },
              isLoadingShow: false
            });
          }
        });
      }, function(){
        AlertIOS.alert('设置','无法获取设备唯一标识');
      });
    }, function(){
      AlertIOS.alert('设置','无法获取设备唯一标识，请关闭设置->隐私->广告->限制广告跟踪');
    });
  },

  render: function(){
    return(
      <View style={{flex:1}}>
        {this.state.isLoadingShow ?
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicatorIOS size="small" color="#268DFF"></ActivityIndicatorIOS>
          </View>:null
        }
        {!this.state.isLoadingShow ?
          <View style={this.state.showIndex}>
            <TabBarIOS barTintColor="#FFF">
              <TabBarIOS.Item
                icon={require('image!phone_s')}
                title="首页"
                selected={this.state.selectedTab === 'home'}
                onPress={this._selectTab.bind(this, 'home')}
                >
                {this._addNavigator(Home, '主页')}
              </TabBarIOS.Item>

              <TabBarIOS.Item
                title="公告"
                icon={require('image!gonggao')}
                selected={this.state.selectedTab === 'message'}
                onPress={this._selectTab.bind(this, 'message')}
                >
                {this._addNavigator(Message, '公告')}
              </TabBarIOS.Item>

              <TabBarIOS.Item
                title="管理"
                icon={require('image!manager')}
                selected={this.state.selectedTab === 'manager'}
                onPress={this._selectTab.bind(this, 'manager')}
                >
                {this._addNavigator(Manager, '管理')}
              </TabBarIOS.Item>

              <TabBarIOS.Item
                title="关于"
                icon={require('image!about')}
                selected={this.state.selectedTab === 'about'}
                onPress={this._selectTab.bind(this, 'about')}
                >
                {this._addNavigator(About, '关于')}
              </TabBarIOS.Item>
            </TabBarIOS>
          </View> : null
        }
        <ScrollView style={[this.state.showLogin]}>
          <View style={styles.container}>
            <View>
              <Image style={styles.logo} source={require('image!logo')}></Image>
            </View>

            <View style={styles.inputRow}>
              <Text>邮箱</Text><TextInput style={styles.input} placeholder="请输入邮箱" onChangeText={this._getUserName}/>
            </View>
            <View style={styles.inputRow}>
              <Text>密码</Text><TextInput style={styles.input} placeholder="请输入密码" password={true} onChangeText={this._getPassword}/>
            </View>

            <View>
              <TouchableHighlight underlayColor="#fff" style={styles.btn} onPress={this._login}>
                <Text style={{color:'#fff'}}>登录</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>

      </View>
    );
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




AppRegistry.registerComponent('address_book', () => Address);
