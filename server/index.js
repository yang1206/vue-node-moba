const express  = require('express')

const app = express()

//在express实例设置一个变量用于校验token
app.set('secret','2hj1g3hjg3h24gh3gh')

app.use(require('cors')())
app.use(express.json({ limit: '2100000kb' }))

//上传静态文件
app.use('/uploads',express.static(__dirname + '/uploads'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/', express.static(__dirname + '/web'))
//数据库
require('./plugins/db')(app)
//后台接口
require('./routes/admin')(app)
//前端接口
require('./routes/web')(app)


app.listen(3000,()=>{
  console.log('server is running   http://localhost:3000');
})