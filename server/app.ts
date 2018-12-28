import "reflect-metadata";
import { createConnection } from "typeorm";
import * as Koa from "koa";
import * as json from "koa-json";
import * as bodyParser from "koa-bodyparser";
import Middlewares from "./middlewares";

createConnection().then(async connection => {
   // create koa app
   const app = new Koa();

   // middlewares
   app.use(json());
   app.use(bodyParser());
   Middlewares(app);

   // start node
   let port = 4000;
   app.listen(port);
   console.log('typeorm is runing on ' + port);

}).catch(error => console.log("TypeORM connection error: ", error));
