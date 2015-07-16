var fs = require('fs');
var util = require('./../util');
var MESSAGE_PATH = './database/message.json';

var Message = {

  init: function(app){
    app.post('/message/get', this.getMessage);
  },

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
  }

};


module.exports = Message;