
var React = require('react-native');
var Address = require('./address');
var Service = require('./../service');
var Util = require('../util');

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
            <Text style={styles.font10}>{this.props.partment}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },
  //加载页面
  _loadPage: function(e){
    var nav = this.props.nav;
    var key = Util.key;
    var partment = this.props.partment;
    var path = Service.host + Service.getUser;

    Util.post(path, {
      key: key,
      partment : partment
    }, function(data){
      nav.push({
        title: this.props.tag,
        component: Address,
        passProps:{
          data: data
        }
      });
    }.bind(this));

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