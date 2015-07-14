
var fs = require('fs');
var util = require('./../util');
var USER_PATH = './database/user.json';


var User = {

  init: function(app){
    app.get('/user/get', this.getUser);
    app.get('/user/create', this.addUser);
    app.post('/user/login', this.login);
    app.get('/user/login/token', this.loginByToken);
    app.get('/user/password/update', this.updatePassword);
    app.get('/user/delete', this.deleteUser);
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
    var apartment =  req.param('apartment');
    var tag = req.param('tag');
    var creater = req.param('creater');

    try{
      var content = JSON.parse(fs.readFileSync(USER_PATH));
      var obj = {
        "userid": util.guid(),
        "username": username,
        "password": password,
        "apartment": apartment,
        "tel": tel,
        "email": email,
        "tag": tag,
        "creater": creater,
        "time": new Date()
      };
      content.push(obj);
      //更新文件
      fs.writeFileSync(USER_PATH, JSON.stringify(content));
      delete obj.password;
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
  },

  //用户登录
  //方便大会用户，开启白名单（但是不能修改密码、不能删除、更新其他用户信息；可增加用户）
  login: function(req, res){
    var email = req.param('email');
    var password = util.md5(req.param('password'));
    var deviceId = req.param('deviceId');

    var content = JSON.parse(fs.readFileSync(USER_PATH));
    for(var i in content){
      //验证通过
      if(content[i].email === email && content[i].password === password){
        var token = util.guid() + deviceId;
        content[i].token = token;
        //写入到文件中
        fs.writeFileSync(USER_PATH, JSON.stringify(content));
        //删除密码
        delete content[i].password;
        return res.send({
          status: 1,
          data: content[i]
        });
      }
    }

    return res.send({
      status: 0,
      data:'用户名或者密码错误'
    });
  },

  //通过token登录
  loginByToken: function(req, res){
    var token = req.param('token');
    var content = JSON.parse(fs.readFileSync(USER_PATH));

    for(var i in content){
      if(token === content[i].token){
        delete content[i].password;
        return res.send({
          status:1,
          data: content[i]
        });
      }
    }

    return res.send({
      status: 0,
      info: 'token失效'
    });
  },

  //用户修改密码
  updatePassword: function(req, res){
    var token = req.param('token');
    var password = util.md5(req.param('password'));
    var content = JSON.parse(fs.readFileSync(USER_PATH));

    for(var i in content){
      if(token === content[i].token){
        content[i].password = password;
        //写入到文件中
        fs.writeFileSync(USER_PATH, JSON.stringify(content));
        return res.send({
          status: 1,
          data: '更新成功'
        });
      }
    }

    return res.send({
      status: 0,
      err: '更新失败，没有找到该用户'
    });
  },

  //删除用户
  deleteUser: function(req, res) {
    var token = req.param('token');
    var email = req.param('email');

    var content = JSON.parse(fs.readFileSync(USER_PATH));
    for (var i in content) {
      if (token === content[i].token) {

        //遍历查找需要删除的用户
        for (var j in content) {
          if (content[j].email === email) {
            content.splice(j, 1);
            //写入到文件中
            fs.writeFileSync(USER_PATH, JSON.stringify(content));
            console.log(content);
            return res.send({
              status: 1,
              info: content,
              data: '删除成功'
            });
          }
        }

      }
    }
    return res.send({
      status: 0,
      err: '删除失败，没有找到该用户或者用户鉴权错误'
    });
  }
};


module.exports = User;