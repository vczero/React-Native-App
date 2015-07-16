/**
 * Created by vczero on 15/7/12.
 */

var React = require('react-native');
var Util = require('./util');
var Item = require('./message/item');
var Detail = require('./message/detail');
var Service = require('./service');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} = React;


var Message = React.createClass({
  render: function(){
    var contents = [];
    var items = [];
    var height = Util.size.height - 50 - 114;
    var urls = [];
    var word = '春眠不觉晓，知了处处叫';
    var component = '';

    if(this.props.data.status){
      contents = this.props.data.data;
    }

    urls.push('https://avatars3.githubusercontent.com/u/6133685?v=3&s=50');
    urls.push('http://img1.gtimg.com/13/1309/130992/13099292_200x200_0.jpg');
    urls.push('http://tp1.sinaimg.cn/5396425536/180/5718431393/0');
    urls.push('http://tp2.sinaimg.cn/1904769205/180/5728293682/1');

    for(var i = 0; i < contents.length; i++){
      var pic = urls[parseInt(Math.random()*4)];
      items.push(
        <Item
          data={contents[i]}
          nav={this.props.navigator}
          pic={pic}
          component={Detail}
          text={contents[i].message}
          name={contents[i].username}
          date={contents[i].time}/>
      );
    }

    return (
      <ScrollView style={styles.container}>
        <View style={{height:50,padding:7,}}>
          <TextInput style={styles.search} placeholder="搜索"/>
        </View>
        <View style={{backgroundColor:'#fff', borderTopWidth:1, borderTopColor:'#ddd'}}>
          {items}
        </View>
      </ScrollView>
    );
  }

});

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F5F5F5',
    flexDirection:'column'
  },
  search:{
    height:35,
    borderWidth:Util.pixel,
    borderColor:'#ccc',
    paddingLeft:10,
    borderRadius:6,
    backgroundColor:'#fff',
  }
});


module.exports = Message;