"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Tasks_1 = require("./entity/Tasks");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "drona.db.elephantsql.com",
    port: 5432,
    username: "eyvktfrl",
    password: "e0hZDDA3DdwGd9pJcU-o8v0_mr6Hvz8b",
    database: "eyvktfrl",
    synchronize: true,
    logging: false,
    entities: [Tasks_1.Tasks],
    migrations: [],
    subscribers: [],
});
exports.AppDataSource.initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization", err);
});
exports.default = exports.AppDataSource;
//# sourceMappingURL=data-source.js.map