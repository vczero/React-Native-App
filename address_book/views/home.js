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
        title: '研发',
        desc: '框架研发',
        color: '#126AFF',
      },
      {
        title: '研发',
        desc: 'BU研发',
        color: '#FFD600',
      },
      {
        title: '产品',
        desc: '公共产品',
        color: '#F80728',
      },
      {
        title: '产品',
        desc: 'BU产品',
        color: '#05C147',
      },
      {
        title: '产品',
        desc: '启明星',
        color: '#FF4EB9',
      },
      {
        title: '项目',
        desc: '项目管理',
        color: '#EE810D',
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
        <View>
          <TouchableHighlight onPress={this._clear}>
            <Text>清除临时数据</Text>
          </TouchableHighlight>
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