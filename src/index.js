"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config({ debug: true });
console.log("Hello " + process.env.TEST_CONFIG);
