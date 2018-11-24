const Koa = require("koa");
const Cache = require("./index");
const got = require("got");
const app = new Koa();
const cache = Cache({ stdTTL: 120 });

app.use(cache);

app.use(async ctx => {
  //   ctx.body = (await got("https://jsonplaceholder.typicode.com/posts")).body;
  ctx.body = "aze";
});

app.listen(3001, () => console.log("listening..."));
