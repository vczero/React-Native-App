/**
 * Created by vczero on 15/7/12.
 */

var React = require('react-native');
var Util = require('./util');
var ItemBlock = require('./home/itemblock');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} = React;


var Home = React.createClass({
  getInitialState: function(){
    //减去paddingLeft && paddingRight && space
    var width = Math.floor(((Util.size.width - 20) - 50) / 4);
    var items = [
      {
        title: 'FRD',
        desc: '框架研发',
        color: '#12B0FF',
      },
      {
        title: 'BRD',
        desc: 'BU研发',
        color: '#FFD600',
      },
      {
        title: 'PM',
        desc: '公共产品',
        color: '#F80728',
      },
      {
        title: 'BPM',
        desc: 'BU产品',
        color: '#05C147',
      },
      {
        title: 'NPR',
        desc: '新产品',
        color: '#FF4EB9',
      },
      {
        title: 'MP',
        desc: '项目管理',
        color: '#23F716',
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
          nav={this.props.navigator}
          data={items[i].data}
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
          nav={this.props.navigator}
          data={items[i].data}
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
  itemRow:{
    flexDirection:'row',
    marginBottom:20,
  }
});



module.exports = Home;