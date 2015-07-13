/**
 * Created by lihua on 15/7/13.
 */
var React = require('react-native');
var Util = require('../util');

var {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  } = React;

var Item = React.createClass({
  render: function(){
    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <View style={styles.width55}>
            <Image style={styles.img} source={{uri: this.props.url}}/>
          </View>
          <View style={{flexDirection:'column',flex:1}}>
            <Text numberOfLines={2} style={styles.text}>
              {this.props.text}
            </Text>
            <Text style={styles.date}>
              {this.props.date}
            </Text>
          </View>
          <View numberOfLines={1} style={styles.m10}>
            <Text style={styles.name}>{this.props.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
});


var styles = StyleSheet.create({
  item:{
    height:80,
    padding:5,
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ddd',
    flexDirection:'row',
    alignItems:'center',
  },
  img:{
    width:50,
    height:50,
    borderRadius:4,
  },
  width55:{
    width:55
  },
  text:{
    flex:1,
    marginBottom:5,
  },
  date:{
    color:'#ccc',
    fontSize:11,
  },
  m10:{
    marginLeft:10
  },
  name:{
    color:'#929292',
    fontSize:13
  }
});

module.exports = Item;
