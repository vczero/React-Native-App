var fs = require('fs');

var User = {

  init: function(app){
    app.get('/message/get', this.getUser);
  },

  getUser: function(req, res){
    fs.readFile('./database/message.json', function(err, data){
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


module.exports = User;