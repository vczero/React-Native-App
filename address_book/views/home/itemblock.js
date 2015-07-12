/**
 * Created by lihua on 15/7/12.
 */

var React = require('react-native');
var Address = require('./address');

var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} = React;


//每个单项组件
var ItemBlock = React.createClass({
  render: function(){
    var size ={
      width: parseInt(this.props.width),
      height: parseInt(this.props.width),
      backgroundColor: this.props.color,
    };
    return (
      <TouchableHighlight underlayColor="#fff" onPress={this._loadPage}>
        <View style={[styles.itemBlock, size]}>
          <View>
            <Text style={styles.font18}>{this.props.title}</Text>
          </View>
          <View>
            <Text style={styles.font10}>{this.props.desc}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },
  //加载页面
  _loadPage: function(){
    var nav = this.props.nav;
    nav.push({
      title: this.props.desc,
      component: Address,
      passProps:{
        type: this.props.title
      }
    });
  }
});

var styles = StyleSheet.create({
  itemBlock:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    marginLeft:10,
  },
  font18:{
    color:'#fff',
    fontSize:18,
    fontWeight:'500',
  },
  font10:{
    color:'#fff',
    fontSize:10,
  },
});

module.exports = ItemBlock;