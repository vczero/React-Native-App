/**
 * Created by vczero on 15/7/12.
 */

var React = require('react-native');
var Util = require('./util');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} = React;


var Manager = React.createClass({

  render: function(){
    var colors = ['#F4000B', '#17B4FF', '#FFD900', '#3BC1FF', '#F00000'];
    var tags = ['U', 'A', 'D', 'U', 'M'];
    var items = ['修改个人信息', '增加联系人', '删除联系人', '更新联系人', '发布公告'];
    var JSXDOM = [];
    for(var i in items){
      JSXDOM.push(
        <TouchableOpacity>
          <View style={[styles.item, {flexDirection:'row'}]}>
            <Text style={[styles.tag, {color: colors[i]}]}>{tags[i]}</Text>
            <Text style={[styles.font,{flex:1}]}>{items[i]}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <ScrollView style={styles.container}>

        <View style={styles.wrapper}>
          {JSXDOM}
        </View>

      </ScrollView>
    );
  },

});

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F5F5F5',
  },
  item:{
    height:40,
    justifyContent: 'center',
    borderTopWidth: Util.pixel,
    borderTopColor: '#ddd',
    backgroundColor:'#fff',
    alignItems:'center',
  },
  font:{
    fontSize:15,
    marginLeft:5,
    marginRight:10,
  },
  wrapper:{
    marginTop:30,
  },
  tag:{
    marginLeft:10,
    fontSize:16,
    fontWeight:'bold'
  }
});

module.exports = Manager;