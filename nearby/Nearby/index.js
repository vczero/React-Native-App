var React = require('react-native');
var Bank = require('./views/bank');
var Film = require('./views/film');
var Food = require('./views/food');
var Toilet = require('./views/toilet');
var Map = require('./views/map');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS,
  StatusBarIOS,
  TabBarIOS
  } = React;


//是否开启真实的定位；如果开启了_GEO_OPEN，_GEO_TEST_POS则会失效
_GEO_OPEN = false;
//模拟定位数据
_GEO_TEST_POS = '121.390686,31.213976';

//高亮
StatusBarIOS.setStyle('light-content');
//开启网络状态
StatusBarIOS.setNetworkActivityIndicatorVisible(true);

var Nearby = React.createClass({
  getInitialState: function(){
    return{
      selected: '美食'
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <TabBarIOS>
          <TabBarIOS.Item
            title='美食'
            selected={this.state.selected === '美食'}
            icon={require("image!food")}
            onPress={()=>{this.setState({selected: '美食'})}}>
            <NavigatorIOS
              barTintColor='#007AFF'
              titleTextColor="#fff"
              tintColor="#fff"
              ref="nav_food"
              style={styles.container}
              initialRoute={{
                component: Food,
                title: '美食',
                rightButtonTitle: '地图',
                onRightButtonPress: ()=>{
                  this.refs.nav_food.navigator.push({
                    title: '地图',
                    component: Map,
                    passProps:{
                      type:'餐饮'
                    }
                  });
                }
              }}
              />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title='电影'
            selected={this.state.selected === '电影'}
            icon={require("image!film")}
            onPress={()=>{this.setState({selected: '电影'})}}>
            <NavigatorIOS
              style={styles.container}
              barTintColor='#007AFF'
              titleTextColor="#fff"
              tintColor="#fff"
              ref="nav_film"
              initialRoute={{
                component: Film,
                title: '电影',
                rightButtonTitle: '地图',
                onRightButtonPress: ()=>{
                  this.refs.nav_film.navigator.push({
                    title: '地图',
                    component: Map,
                    passProps:{
                      type:'电影院'
                    }
                  });
                }
              }}
              />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title='银行'
            selected={this.state.selected === '银行'}
            icon={require("image!bank")}
            onPress={()=>{this.setState({selected: '银行'})}}>
            <NavigatorIOS
              style={styles.container}
              barTintColor='#007AFF'
              titleTextColor="#fff"
              tintColor="#fff"
              ref="nav_bank"
              initialRoute={{
                component: Bank,
                title: '银行',
                rightButtonTitle: '地图',
                onRightButtonPress: ()=>{
                  this.refs.nav_bank.navigator.push({
                    title: '地图',
                    component: Map,
                    passProps:{
                      type:'银行'
                    }
                  });
                }

              }}
              />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title='卫生间'
            selected={this.state.selected === '卫生间'}
            icon={require("image!toilet")}
            onPress={()=>{this.setState({selected: '卫生间'})}}>
            <NavigatorIOS
              style={styles.container}
              barTintColor='#007AFF'
              titleTextColor="#fff"
              tintColor="#fff"
              ref="nav_toilet"
              initialRoute={{
                component: Toilet,
                title: '卫生间',
                rightButtonTitle: '地图',
                onRightButtonPress: ()=>{
                  this.refs.nav_toilet.navigator.push({
                    title: '地图',
                    component: Map,
                    passProps:{
                      type:'厕所'
                    }
                  });
                }
              }}
              />
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = Nearby;