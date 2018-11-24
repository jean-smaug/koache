# Koach

Koach is small middleware using [node-cache](https://github.com/mpneuried/nodecache).

```
const Koa = require("koa");
const Cache = require("./index");

const app = new Koa();
const cache = Cache({ stdTTL: 10 }); // See node-cache documentation to see allowded options

app.use(cache);

app.use(async ctx => {
  ctx.body = "smaug";
});

app.listen(3001, () => console.log("listening..."));

```
