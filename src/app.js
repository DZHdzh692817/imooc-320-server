const Koa = require('koa')
const app = new Koa()

const router = require('./router')

// 注册路由1222222
app.use(router.routes(), router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server ook error', err, ctx)
});

module.exports = app
