
'use strict';
var React = require('react-native');
var Home = require('./views/home');
var About = require('./views/about');
var Manager = require('./views/manager');
var Message = require('./views/message');
var Util = require('./views/util');

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
  TouchableHighlight,
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
    };
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

  _login: function(){
    this.setState({
      showLogin: {
        //opacity:0,
        height:18,
        backgroundColor: '#000',
      },
      showIndex:{
        flex:1,
        opacity:1
      }
    });
  },

  render: function(){
    return(
      <View style={{flex:1}}>

        <View style={[this.state.showLogin]}>
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
        </View>

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
        </View>

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
