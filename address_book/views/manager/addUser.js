
var React = require('react-native');
var Util = require('./../util');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  PickerIOS,
  } = React;

var AddUser = React.createClass({

  getInitialState: function(){
    var items = ['A', 'B', 'C', 'D', 'E', 'F'];
    var tags = ['框架研发', 'BU产品', 'BU研发', '启明星', '项目管理', '公共产品'];
    var types = ['产品', '研发', '项目'];
    return {
      items: items,
      tags: tags
    };
  },

  render: function(){
    var tagOne = [];
    for(var i = 0; i <3; i++){
      tagOne.push(
        <TouchableOpacity onPress={this._select.bind(this, this.state.items[i])}>
          <View style={[styles.part, this.state['select' + this.state.items[i]]]}>
            <Text style={this.state['select' + this.state.items[i]]}>{this.state.tags[i]}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    var tagTwo = [];
    for(var i = 3; i <6; i++){
      tagTwo.push(
        <TouchableOpacity onPress={this._select.bind(this, this.state.items[i])}>
          <View style={[styles.part, this.state['select' + this.state.items[i]]]}>
            <Text style={this.state['select' + this.state.items[i]]}>{this.state.tags[i]}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <ScrollView style={{paddingTop:30}}>
        <View style={styles.row}>
          <Text style={styles.label}>用户名</Text>
          <TextInput style={styles.input}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>密码</Text>
          <TextInput style={styles.input} password={true} placeholder="初始密码"/>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>邮箱</Text>
          <TextInput style={styles.input}/>
        </View>

        <View style={styles.partment}>
          {tagOne}
        </View>
        <View style={styles.partment}>
          {tagTwo}
        </View>

      </ScrollView>
    );
  },
  _select: function(id){
    var obj = {};
    var items = {
      A:{},
      B:{},
      C:{},
      D:{},
      E:{},
      F:{}
    };
    //加上选中效果
    obj['select' + id] = {
      backgroundColor:'#3BC1FF',
      color: '#fff',
      borderColor:'#3BC1FF'
    };
    this.setState(obj);
    this.setState();
    //清除其他选中效果
    delete items[id];
    for(var i in items){
      var newObj = {};
      newObj['select' + i] = {
        backgroundColor:'#FFF',
        color: '#000',
        borderColor:'#ddd'
      };
      this.setState(newObj);
    }
  }

});


var styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:7,
  },
  label:{
    width:50,
    marginLeft:10,
  },
  input:{
    borderWidth: Util.pixel,
    height:35,
    flex:1,
    marginRight:20,
    borderColor:'#ddd',
    borderRadius: 4,
    paddingLeft:5,
    fontSize:14,
  },
  partment:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:10,
  },
  part:{
    width:65,
    height:30,
    borderWidth:1,
    borderColor: '#ddd',
    borderRadius:3,
    alignItems:'center',
    justifyContent:'center',
    marginRight:10
  }
});


module.exports = AddUser;