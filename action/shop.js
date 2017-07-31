const router = require('koa-router')()
const db = require('../db/db')

// 获取数据列表
function shopList(where, page, size) {
    return new Promise((resolve, reject) => {
        where = where || {}
        page = page || 1
        size = size || 15
        var skip = (page - 1) * size
        db.shops.find(where).sort({ ctime: -1 }).skip(skip).limit(size).exec((err, rows) => {
            db.shops.count(where, (err, count) => {
                resolve({
                    rows: rows,
                    total: count
                })
            })
        })
    })
}

// 新增数据
function shopCreate(obj) {
    return new Promise((resolve, reject) => {
        db.shops.insert(obj, (error, doc) => {
            resolve(doc)
        })
    })
}

// 更新数据
function shopUpdate(_id, data) {
    return new Promise((resolve, reject) => {
        db.shops.update({
            _id: _id
        }, {
            $set: data
        }, {}, () => {
            resolve()
        })
    })
}

// 删除数据
function shopRemove(_id) {
    return new Promise((resolve, reject) => {
        db.shops.remove({
            _id: _id
        }, {}, (error, num) => {
            resolve(num)
        })
    })
}

router.all('/list', async (ctx, next) => {
    var page = ctx.request.body.page
    var size = ctx.request.body.size
    var name = ctx.request.body.name
    var addr = ctx.request.body.addr
    var where = {}
    if (name) {
        where.name = new RegExp(name)
    }
    if (addr) {
        where.addr = new RegExp(addr)
    }
    var result = await shopList(where, page, size)
    result.stat = 'OK'
    ctx.body = result
})

router.all('/create', async (ctx, next) => {
    ctx.checkBody('name').notEmpty('名称不能为空')
    ctx.checkBody('addr').notEmpty('地址不能为空')
    ctx.checkBody('phone').notEmpty('电话不能为空')
    if (ctx.errors) {
        return await next()
    }
    var obj = {
        name: ctx.request.body.name,
        addr: ctx.request.body.addr,
        phone: ctx.request.body.phone,
        score: ctx.request.body.score ? Number(ctx.request.body.score) : 0,
        avgprice: ctx.request.body.avgprice ? Number(ctx.request.body.avgprice) : 0,
        longitude: ctx.request.body.longitude ? Number(ctx.request.body.longitude) : 0,
        latitude: ctx.request.body.latitude ? Number(ctx.request.body.latitude) : 0,
        ctime: Date.now()
    }
    var shop = await shopCreate(obj)
    ctx.body = {
        stat: 'OK',
        shop: shop
    }
})

router.all('/update', async(ctx, next) => {
    ctx.checkBody('_id').notEmpty('_id不能为空')
    if (ctx.errors) {
        return await next()
    }
    var _id = ctx.request.body._id
    var data = ctx.request.body.data || {}
    await shopUpdate(_id, data)
    ctx.body = {
        stat: 'OK'
    }
})

router.all('/remove', async(ctx, next) => {
    ctx.checkBody('_id').notEmpty('_id不能为空')
    if (ctx.errors) {
        return await next()
    }
    await shopRemove(ctx.request.body._id)
    ctx.body = {
        stat: 'OK'
    }
})

module.exports = router