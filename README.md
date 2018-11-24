# Koach

Koach is small middleware using [node-cache](https://github.com/mpneuried/nodecache) to cache requests.
Koach will cache each path of your application, so you can use it in combination of [koa-router](https://github.com/alexmingoia/koa-router)

```js
const Koa = require("koa");
const Cache = require("koach");

const app = new Koa();
const cache = Cache({ stdTTL: 10 }); // See node-cache documentation to see allowded options

app.use(cache);

app.use(async ctx => {
  ctx.body = "smaug";
});

app.listen(3001, () => console.log("listening..."));
```
