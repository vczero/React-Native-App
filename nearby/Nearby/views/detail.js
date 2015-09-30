var React = require('react-native');
var Util = require('./util');

var {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicatorIOS,
  TouchableOpacity
  } = React;

var FoodDetail = React.createClass({
  getInitialState: function(){
    return{
      data: null
    };
  },
  render: function(){
    return (
      <ScrollView>
        {this.state.data?
        <View style={styles.content}>
          <Text style={styles.name}>{this.state.data.name}</Text>
          <Text style={styles.types}>
            类型：
            {this.state.data.type}
          </Text>
          <Text style={styles.address}>
            地址：
            {this.state.data.address}
          </Text>
          <Text style={styles.tag}>
            标签：
            {this.state.data.tag}
          </Text>
          <Text style={styles.server}>
            服务：
            {this.state.data.server}
          </Text>
        </View>
        :null}
      </ScrollView>
    );
  },
  componentDidMount: function(){
    var that = this;
    var url = Util.detailURL + 'key=' + Util.amapKey + '&id=' + this.props.id + '&extensions=all';
    Util.getJSON(url, function(data){
      if(data.status && data.info === 'OK' && data.pois.length){
        var obj = data.pois[0];
        if(obj.deep_info && obj.deep_info.tag){
          obj.server = obj.deep_info.tag;
        }
        that.setState({
          data: obj
        });
      }else{
        alert('数据服务出错');
      }

    });
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1
  },
  name:{
    fontSize:15,
    color:'#1D92F5',
    fontWeight:'bold'
  },
  content:{
    marginLeft:10,
    marginRight:10,
    marginTop:10
  },
  tag:{
    fontSize:13,
    marginTop:10
  },
  types:{
    marginTop:10,
    fontSize:13,
    color:'#4C4C4C'
  },
  address:{
    fontSize:13,
    color:'#4C4C4C'
  },
  server:{
    marginTop:10,
    fontSize:13
  }

});



module.exports = FoodDetail;

