# Koache

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

Koache is small middleware using [node-cache](https://github.com/mpneuried/nodecache) to cache requests.
Koache will cache each path of your application, so you can use it in combination of [koa-router](https://github.com/alexmingoia/koa-router)

```js
const Koa = require("koa");
const cache = require("koache");

const app = new Koa();

// See node-cache documentation to see allowded options
app.use(cache({ stdTTL: 10 }));

app.use(async ctx => {
  ctx.body = "smaug";
});

app.listen(3001, () => console.log("listening..."));
```
