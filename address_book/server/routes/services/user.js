
var fs = require('fs');
var util = require('util');
var USER_PATH = './database/user.json';

var User = {

  init: function(app){
    app.get('/user/get', this.getUser);
    app.get('/user/create', this.addUser);
  },

  //获取用户信息
  getUser: function(req, res){
    fs.readFile(USER_PATH, function(err, data){
      if(!err){
        try{
          var obj = JSON.parse(data);
          for(var i in obj){
            delete obj[i]['password'];
          }
          return res.send({
            status: 1,
            data: obj
          });
        }catch(e){
          return res.send({
            status: 0,
            err: e
          });
        }
      }

      return res.send({
        status: 0,
        err: err
      });
    });
  },

  //添加用户
  addUser: function(req, res){
    var username = req.param('username');
    var password = util.md5(req.param('password'));
    var tel = req.param('tel');
    var email = req.param('email');
    var apartment =  req.param('partment');
    var tag = req.param('tag');
    var creater = req.param('creater');

    try{
      var content = JSON.parse(fs.readFileSync(USER_PATH));
      var obj = {
        "userid": "112222",
        "username": "王利华",
        "password": "123",
        "apartment": "框架研发部",
        "tel": "19909085678",
        "email": "wlhmyit@126.com",
        "tag": "前端框架"
      };
      content.push();

      return res.send({
        status: 1,
        data: content
      });
    }catch(e){
      return res.send({
        status: 0,
        err: e
      });
    }
  }

};


module.exports = User;