//user API            
//获取用户信息          
app.post('/user/get', this.getUser);          
//创建用户        
app.post('/user/create', this.addUser);     
//登录     
app.post('/user/login/token', this.loginByToken);      
//更新密码     
app.post('/user/password/update', this.updatePassword);       
//删除用户       
app.post('/user/delete', this.deleteUser);       
//message API        
//获取公告       
app.post('/message/get', this.getMessage);       
