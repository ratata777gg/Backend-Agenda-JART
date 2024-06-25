"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const pool = promise_mysql_1.default.createPool({
    host: "sql5.freesqldatabase.com",
    port: 3306,
    user: "sql5716046",
    password: "MT3iFixyze",
    database: "sql5716046",
});
pool.getConnection().then((connection) => {
    pool.releaseConnection(connection);
    console.log("DB is Connected");
});
exports.default = pool;
