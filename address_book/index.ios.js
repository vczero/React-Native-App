/*
* @description: 首页
* @time: 2015-07-12
* @author: vczero
* */

'use strict';
var React = require('react-native');
var Home = require('./views/home');

var {
  StyleSheet,
  View,
  TabBarIOS,
  Text,
  AppRegistry,
  NavigatorIOS,
} = React;

var AddressBook =  React.createClass({
  statics: {
    title: '主页',
    description: '选项卡'
  },

  getInitialState: function(){
    return {
      selectedTab: 'home'
    };
  },

  _selectTab: function(tabName){
    this.setState({
      selectedTab: tabName
    });

  },

  render: function(){
    return(
      <TabBarIOS barTintColor="#FFF">
        <TabBarIOS.Item
          icon={require('image!phone_s')}
          title="首页"
          selected={this.state.selectedTab === 'home'}
          onPress={this._selectTab.bind(this, 'home')}
          >
          <NavigatorIOS
            style={{flex:1}}
            titleTextColor='#fff'
            itemWrapperStyle={{borderColor:'blue'}}
            initialRoute={{
              component: Home,
              title: "主页"
            }}
            />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="公告"
          icon={require('image!gonggao')}
          selected={this.state.selectedTab === 'message'}
          onPress={this._selectTab.bind(this, 'message')}
          >
          <View></View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="管理"
          icon={require('image!manager')}
          selected={this.state.selectedTab === 'manager'}
          onPress={this._selectTab.bind(this, 'manager')}
          >
          <View></View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="关于"
          icon={require('image!about')}
          selected={this.state.selectedTab === 'about'}
          onPress={this._selectTab.bind(this, 'about')}
          >
          <View></View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

});


AppRegistry.registerComponent('address_book', () => AddressBook);
