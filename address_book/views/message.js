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
    if(this.props.data.status){
      contents = this.props.data.data;
    }
    for(var i = 0; i < contents.length; i++){
      items.push(
        <Item
          data={contents[i]}
          nav={this.props.navigator}
          component={Detail}
          key={contents[i].messageid}
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
    flexDirection:'column',
    marginBottom: 64
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