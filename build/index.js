"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// import “reflect-metadata”
var bodyParser = require("body-parser");
var cors = require("cors");
var routes_1 = require("./routes");
// create express app
var app = express();
app.use(cors({ origin: 'https://frontend-fiap.herokuapp.com' }));
app.use(bodyParser.json());
app.use(routes_1.default);
// start express server
app.listen(process.env.PORT || 3333, () => {
    console.log("Servidor em Execução");
  });

  
// import * as express from "express"
// import * as bodyParser from "body-parser"
// import { Request, Response } from "express"
// import { AppDataSource } from "./data-source"
// import { Routes } from "./routes"
// import { Tasks } from "./entity/User"
// AppDataSource.initialize().then(async () => {
//     // create express app
//     const app = express()
//     app.use(bodyParser.json())
//     // register express routes from defined application routes
//     Routes.forEach(route => {
//         (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
//             const result = (new (route.controller as any))[route.action](req, res, next)
//             if (result instanceof Promise) {
//                 result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)
//             } else if (result !== null && result !== undefined) {
//                 res.json(result)
//             }
//         })
//     })
//     // setup express app here
//     // ...
//     // start express server
//     app.listen(3000)
//     // insert new users for test
//     await AppDataSource.manager.save(
//         AppDataSource.manager.create(Tasks, {
//             firstName: "Timber",
//             lastName: "Saw",
//             age: 27
//         })
//     )
//     await AppDataSource.manager.save(
//         AppDataSource.manager.create(Tasks, {
//             firstName: "Phantom",
//             lastName: "Assassin",
//             age: 24
//         })
//     )
//     console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")
// }).catch(error => console.log(error))
//# sourceMappingURL=index.js.map