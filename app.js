const Koa = require('koa')
const serve = require('koa-static')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const db = require('./db/db')
const app = new Koa()
app.use(bodyParser())
require('koa-validate')(app)
app.use(serve('web'))

app.use(async (ctx, next) => {
    var start = Date.now()
    try {
        await next()
    } catch (error) {
        console.log(error)
        return ctx.body = {
            stat: 'ERROR',
            message: error.message
        }
    }
    var ms = Date.now() - start
    ctx.set('Content-Type', 'application/json')
    ctx.set('X-Response-Time', ms + 'ms')
    ctx.set('X-Powered-By', 'SC')
})

router.use('/shop', require('./action/shop').routes())
const routes = router.routes()
app.use(routes)

app.use(async (ctx, next) => {
    if (ctx.errors) {
        console.log(ctx.errors)
        var message = ''
        var keys = Object.keys(ctx.errors[0])
        ctx.body = {
            stat: 'ERROR',
            message: ctx.errors[0][keys[0]]
        }
    } else {
        ctx.body = {
            stat: '404',
            message: 'not found'
        }
    }
})

app.on('error', function (error, ctx) {
    console.log(error.message)
})

const port = 8090
app.listen(port)
console.log('正在监听端口:' + port)