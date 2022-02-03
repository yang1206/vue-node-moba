module.exports = options => {
  //写出函数，方便配置
  //登录校验中间件
  const jwt = require('jsonwebtoken')
  //省略大量重复的if
  const assert = require('http-assert')
  const AdminUser = require('../models/AdminUser')
  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请先登录')
    const { id } = jwt.verify(token, req.app.get('secret'))
    assert(token, 401, '请先登录')
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, '请先登录')
    // console.log(req.user);
    await next()
  }
}