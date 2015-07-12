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
  TouchableHighlight,
} = React;

//单项
var ItemBlock = React.createClass({
  render: function(){
    var size ={
      width: parseInt(this.props.width),
      height: parseInt(this.props.width),
      backgroundColor: this.props.color,
    };
    return (
      <TouchableHighlight underlayColor="#fff" onPress={this.props.loadContent}>
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
  }
});


var Home = React.createClass({

  getInitialState: function(){
    //减去paddingLeft && paddingRight && space
    var width = Math.floor(((Util.size.width - 20) - 50) / 4);
    var items = [
      {
        title: 'FRD',
        desc: '框架研发',
        color: '#12B0FF'
      },
      {
        title: 'BRD',
        desc: 'BU研发',
        color: '#FFD600'
      },
      {
        title: 'CPM',
        desc: '公共产品',
        color: '#F80728'
      },
      {
        title: 'BPM',
        desc: 'BU产品',
        color: '#05C147'
      },
      {
        title: 'NP',
        desc: '新产品',
        color: '#FF4EB9'
      },
      {
        title: 'PM',
        desc: '项目管理',
        color: '#23F716'
      }
    ];

    return {
      items: items,
      width: width
    };
  },

  render: function(){
    var Items1 = [];
    var Items2 = [];
    var items = this.state.items;

    for(var i = 0; i < 4; i++){
      Items1.push(
        <ItemBlock
          title={items[i].title}
          desc={items[i].desc}
          width={this.state.width}
          color={items[i].color}
          loadContent={()=>{}}
          />
      );
    }

    for(var i = 4; i < items.length; i++){
      Items2.push(
        <ItemBlock
          title={items[i].title}
          desc={items[i].desc}
          width={this.state.width}
          color={items[i].color}
          loadContent={()=>{}}
          />
      );
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.itemRow}>
          {Items1}
        </View>
        <View style={styles.itemRow}>
          {Items2}
        </View>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
  },
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
  itemRow:{
    flexDirection:'row',
    marginBottom:20,
  }
});



module.exports = Home;