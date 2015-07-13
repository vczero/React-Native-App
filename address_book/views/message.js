/**
 * Created by vczero on 15/7/12.
 */

var React = require('react-native');
var Util = require('./util');
var Item = require('./message/item');

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
    var height = Util.size.height - 50 - 114;
    var items = [];
    var urls = [];
    urls.push('https://avatars3.githubusercontent.com/u/6133685?v=3&s=50');
    urls.push('http://img1.gtimg.com/13/1309/130992/13099292_200x200_0.jpg');
    urls.push('http://tp1.sinaimg.cn/5396425536/180/5718431393/0');
    urls.push('http://tp2.sinaimg.cn/1904769205/180/5728293682/1');

    for(var i = 0; i < 15; i++){
      var url = urls[1];
      if(i % 4 === 1){
        url = urls[0];
      }
      if(i % 4 === 2){
        url = urls[2];
      }
      if(i % 4 === 3){
        url = urls[3];
      }
      items.push(<Item url={url} text="Hello" name="张小木" date="2015-05-23"/>);
    }
    return (
      <ScrollView style={styles.container}>
        <View style={{height:50,padding:7,}}>
          <TextInput style={styles.search} placeholder="搜索"/>
        </View>

        <View style={{minHeight:height,backgroundColor:'#fff', borderTopWidth:1, borderTopColor:'#ddd'}}>
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