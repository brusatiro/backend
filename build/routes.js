"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TasksController_1 = require("./controller/TasksController");
var TasksController_2 = require("./controller/TasksController");
var TasksController_3 = require("./controller/TasksController");
var TasksController_4 = require("./controller/TasksController");
var TasksController_5 = require("./controller/TasksController");
var TasksController_6 = require("./controller/TasksController");
var routes = (0, express_1.Router)();
routes.get('/home', function (request, response) {
    return response.json({ message: 'Hello Turma 007!' });
});
routes.get('/tasks', TasksController_1.getTasks);
routes.post('/tasks', TasksController_2.saveTask);
routes.get('/tasks/:id', TasksController_3.getTask);
routes.put('/tasks/:id', TasksController_4.updateTask);
routes.delete('/tasks/:id', TasksController_5.deleteTask);
routes.patch('/tasks/:id', TasksController_6.finishedTask);
exports.default = routes;
// import { Router, request, response, Request, Response} from 'express'
// import { getTasks } from './controller/TasksController';
// import { saveTask } from './controller/TasksController';
// const routes = Router()
// routes.get('/home', (request: Request, response: Response) => {
//     return response.json({ message: 'Hello Turma 007!' })
// })
// routes.get('/tasks', getTasks)
// routes.post('/tasks', saveTask)
// export default routes
// import { UserController } from "./controller/UserController"
// export const Routes = [{
//     method: "get",
//     route: "/users",
//     controller: UserController,
//     action: "all"
// }, {
//     method: "get",
//     route: "/users/:id",
//     controller: UserController,
//     action: "one"
// }, {
//     method: "post",
//     route: "/users",
//     controller: UserController,
//     action: "save"
// }, {
//     method: "delete",
//     route: "/users/:id",
//     controller: UserController,
//     action: "remove"
// }]
//# sourceMappingURL=routes.js.map