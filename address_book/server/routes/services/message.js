var fs = require('fs');
var util = require('./../util');
var MESSAGE_PATH = './database/message.json';
var USER_PATH = './database/user.json';

var Message = {
  init: function(app){
    app.post('/message/get', this.getMessage);
    app.get('/message/add', this.addMessage);
  },

  //获取公告消息
  getMessage: function(req, res){
    var key = req.param('key');
    if(key !== util.getKey()){
      return res.send({
        status: 0,
        data: '使用了没有鉴权的key'
      });
    }
    fs.readFile(MESSAGE_PATH, function(err, data){
      if(!err){
        try{
          var obj = JSON.parse(data);
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

  //增加公告消息
  addMessage: function(req, res){
    var token =  req.param('token');
    var message = req.param('message');
    if(!token || !message){
      return res.send({
        status: 0,
        err: 'token或者message不能为空'
      });
    }
    //根据token查询
    fs.readFile(USER_PATH, function(err, data){
      if(err){
        return res.send({
          status: 0,
          err: err
        });
      }

      try{
        var obj = JSON.parse(data);
        for(var i in obj){
          if(obj[i].token === token){
            //增加信息
            var msgObj = JSON.parse(fs.readFileSync(MESSAGE_PATH));
            msgObj.push({
              messageid: util.guid(),
              userid: obj[i].userid,
              username: obj[i].username,
              time: new Date().getFullYear() + '-'
                    +  (parseInt(new Date().getMonth()) + 1) + '-' +  new Date().getDate(),
              message: message
            });

            fs.writeFileSync(MESSAGE_PATH, JSON.stringify(msgObj));
            return res.send({
              status: 1
            });
          }
        }

        return res.send({
          status: 0,
          err: 'token认证失败'
        });

      }catch(e){
        return res.send({
          status: 0,
          err: e
        });
      }
    });

  }

};

module.exports = Message;