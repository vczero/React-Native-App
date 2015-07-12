/**
 * Created by lihua on 15/7/12.
 */

var React = require('react-native');
var Util = require('../util');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  LinkingIOS,
} = React;


var Address = React.createClass({
  render: function(){
    var items = [];
    for(var i = 0; i < 15; i++){
      var uri = 'https://avatars3.githubusercontent.com/u/6133685?v=3&s=50';
      if(i % 2 === 0){
        uri = 'http://img1.gtimg.com/13/1309/130992/13099292_200x200_0.jpg';
      }
      items.push(
        <View style={styles.row}>
          <View>
            <Image style={styles.avatar} source={{uri:uri}}/>
          </View>
          <View style={styles.part}>
            <Text>
              王利华
            </Text>
            <Text style={styles.unColor}>
              前端框架
            </Text>
          </View>
          <View>
            <TouchableHighlight underlayColor="#fff">
              <Text style={styles.link}>
                131-2764-4932
              </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#fff">
              <Text style={styles.link}>
                wlhmyit@126.com
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    }
    return (
      <ScrollView>
        {items}
      </ScrollView>
    );
  },

  _renderRow: function(type){

  }
});

var styles = StyleSheet.create({
  row:{
    height:80,
    borderBottomWidth: Util.pixel,
    borderBottomColor:'#ccc',
    flexDirection:'row',
    alignItems:'center'
  },
  avatar:{
    width:50,
    height:50,
    borderRadius:4,
    marginLeft:10,
  },
  part:{
    marginLeft:5,
    marginRight:15,
  },
  link:{
    color:'#1BB7FF'
  },
  unColor:{
    color: '#575656',
    marginTop:5,
    fontSize:12,
  }
});


module.exports = Address;