const Koa = require('koa')
const cache = require('./index')

const app = new Koa()

app.use(cache({ stdTTL: 120 }))

app.use(async (ctx, next) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  next()
})

app.use(async ctx => {
  ctx.body = 'aze'
})

app.listen(3001, () => console.log('listening...'))
