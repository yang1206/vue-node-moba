module.exports = app => {
  const express = require('express')
  //资源中间件
  const resourceMiddleware = require('../../middleware/resource')
  //登录校验中间件
  const authMiddleware = require('../../middleware/auth')
  const AdminUser = require('../../models/AdminUser')
  const jwt = require('jsonwebtoken')
  //省略大量重复的if
  const assert = require('http-assert')
  const router = express.Router({
    mergeParams: true
  })
  // const Category = require('../../models/Category')

  //创建资源
  router.post('/', authMiddleware(),async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  //资源列表
  router.get('/', authMiddleware(), async (req, res) => {
    let queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    res.send(items)
  })
  //资源详情
  router.get('/:id', authMiddleware(), async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
  //更新资源
  router.put('/:id', authMiddleware(), async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  //删除资源
  router.delete('/:id', authMiddleware(), async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)



  //上传图片
  const multer = require('multer')
  const upload = multer({ dest: __dirname + './../../uploads' })
  app.post('/admin/api/upload', upload.single('file'), authMiddleware(), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })





  //登录
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    //根据用户名找用户

    const user = await AdminUser.findOne({ username }).select('+password')
    //第5行的包
    assert(user, 422, '用户不存在')
    // if (!user) {
    //   return res.status(422).send({
    //     message: '用户不存在'
    //   })
    // }
    //校验密码
    const isValid = require('bcryptjs').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')
    // if (!isValid) {
    //   return res.status(422).send({
    //     message: '密码错误'
    //   })
    // }
    //返回token
    
    const token = jwt.sign({
      id: user._id,
      // _id: user.id,
      // username:user.username,
    }, app.get('secret'))
    res.send({ token })
  })


  //错误处理函数
  app.use(async (err, req, res, next) => {
    // console.log(err)
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}