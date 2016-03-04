
var React = require('react-native');
var Util = require('./../util');
var Service = require('./../service');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  PickerIOS,
  AlertIOS,
  } = React;

var AddUser = React.createClass({

  getInitialState: function(){
    var items = ['A', 'B', 'C', 'D', 'E', 'F'];
    var tags = ['框架研发', 'BU产品', 'BU研发', '启明星', '项目管理', '公共产品'];
    return {
      items: items,
      tags: tags,
      selectA:{
        backgroundColor:'#3BC1FF',
        borderColor:'#3BC1FF'
      },
      select_A:{
        color: '#FFF'
      },
      yan:{
        backgroundColor:'#3BC1FF',
        borderColor:'#3BC1FF'
      },
      yan_text:{
        color: '#FFF'
      },
      tag:'研发',
      partment: '框架研发'
    };
  },

  render: function(){
    var tagOne = [];
    for(var i = 0; i <3; i++){
      tagOne.push(
        <TouchableOpacity key={this.state.items[i]} onPress={this._select.bind(this, this.state.items[i])}>
          <View style={[styles.part, this.state['select' + this.state.items[i]]]}>
            <Text style={this.state['select_' + this.state.items[i]]}>{this.state.tags[i]}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    var tagTwo = [];
    for(var i = 3; i <6; i++){
      tagTwo.push(
        <TouchableOpacity key={this.state.items[i]} onPress={this._select.bind(this, this.state.items[i])}>
          <View style={[styles.part, this.state['select' + this.state.items[i]]]}>
            <Text style={this.state['select_' + this.state.items[i]]}>{this.state.tags[i]}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <ScrollView style={{paddingTop:30}}>
        <View style={styles.row}>
          <Text style={styles.label}>用户名</Text>
          <TextInput style={styles.input} onChangeText={this._setUserName}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>密码</Text>
          <TextInput style={styles.input} password={true} placeholder="初始密码" onChangeText={this._setPassword}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>邮箱</Text>
          <TextInput style={styles.input} onChangeText={this._setEmail}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>电话</Text>
          <TextInput style={styles.input} onChangeText={this._setTel}/>
        </View>

        <View style={styles.partment}>
          {tagOne}
        </View>
        <View style={styles.partment}>
          {tagTwo}
        </View>

        <View style={{marginTop:30,flexDirection:'row', justifyContent:'center'}}>
          <TouchableOpacity onPress={this._selectType.bind(this, 'yan')}>
            <View style={[styles.part, this.state.yan]}>
              <Text style={this.state.yan_text}>研发</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._selectType.bind(this, 'chan')}>
            <View style={[styles.part, this.state.chan]}>
              <Text style={this.state.chan_text}>产品</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._selectType.bind(this, 'project')}>
            <View style={[styles.part, this.state.project]}>
              <Text style={this.state.project_text}>项目</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{marginTop:30, alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity onPress={this._addUser}>
            <View style={styles.btn}>
              <Text>创建用户</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  },
  _select: function(id){
    var obj = {};
    var color = {};
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
      borderColor:'#3BC1FF'
    };
    color['select_' + id] = {
      color: '#fff',
    };
    this.setState(obj);
    this.setState(color);
    //清除其他选中效果
    delete items[id];
    for(var i in items){
      var newObj = {};
      newObj['select' + i] = {
        backgroundColor:'#FFF',
        borderColor:'#ddd'
      };
      var newColor = {};
      newColor['select_' + i] = {
        color: '#000',
      };
      this.setState(newObj);
      this.setState(newColor);
    }
    //增加变量
    var partment = '框架研发';
    switch (id){
      case 'A':
        partment = this.state.tags[0];
        break;
      case 'B':
        partment = this.state.tags[1];
        break;
      case 'C':
        partment = this.state.tags[2];
        break;
      case 'D':
        partment = this.state.tags[3];
        break;
      case 'E':
        partment = this.state.tags[4];
        break;
      case 'F':
        partment = this.state.tags[5];
        break;
    }
    this.setState({
      partment: partment
    });
  },
  _selectType: function(id){
    var obj = {};
    var color = {};
    var items = {
      yan:{},
      chan:{},
      project:{}
    };
    //加上选中效果
    obj[id] = {
      backgroundColor:'#3BC1FF',
      borderColor:'#3BC1FF'
    };
    color[id + '_text'] = {
      color: '#fff',
    };
    this.setState(obj);
    this.setState(color);

    //清除其他选中效果
    delete items[id];
    for(var i in items){
      var newObj = {};
      newObj[i] = {
        backgroundColor:'#FFF',
        borderColor:'#ddd'
      };
      var newColor = {};
      newColor[i + '_text'] = {
        color: '#000',
      };
      this.setState(newObj);
      this.setState(newColor);
    }
    //增加变量
    var tag = '研发';
    switch (id){
      case 'yan':
        tag = '研发';
        break;
      case 'chan':
        tag = '产品';
        break;
      case 'project':
        tag = '项目';
        break;
      default :
        break;
    }

    this.setState({
      tag: tag
    });

  },

  _setUserName:function(val){
    this.setState({
      username: val
    });
  },

  _setPassword:function(val){
    this.setState({
      password: val
    });
  },

  _setEmail:function(val){
    this.setState({
      email: val
    });
  },

  _setTel: function(val){
    this.setState({
      tel: val
    });
  },

  _addUser: function(){
    var username = this.state.username;
    var email = this.state.email;
    var password = this.state.password;
    var partment = this.state.partment;
    var tag = this.state.tag;
    var tel = this.state.tel;

    if(!username || !email || !password || !tel){
      return AlertIOS.alert('提示', '用户名、初始密码、邮箱电话、必填，请确认!');
    }
    var obj = {
      username: username,
      email: email,
      password: password,
      partment: partment,
      tag: tag,
      tel: tel
    };

    var path =  Service.host + Service.createUser;
    Util.post(path, obj, function(data){
      if(data.status){
        AlertIOS.alert('成功','创建用户成功，请告知用户初始密码');
      }else{
        AlertIOS.alert('失败','创建用户失败');
      }
    });

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
    borderWidth:Util.pixel,
    borderColor: '#ddd',
    borderRadius:3,
    alignItems:'center',
    justifyContent:'center',
    marginRight:10
  },
  btn:{
    borderColor:'#268DFF',
    height:35,
    width:200,
    borderRadius:5,
    borderWidth:Util.pixel,
    alignItems:'center',
    justifyContent:'center'
  }
});


module.exports = AddUser;