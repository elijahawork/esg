"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var PORT = 5000;
// app.listen(PORT, () => {
//   console.log('Listening on', PORT);
// });
var got_1 = __importDefault(require("got"));
var jsdom_1 = __importDefault(require("jsdom"));
var JSDOM = jsdom_1.default.JSDOM;
var vgmUrl = 'https://stockanalysis.com/stocks/';
(0, got_1.default)(vgmUrl).then(function (response) {
    var dom = new JSDOM(response.body);
    console.log(dom.window.document.querySelectorAll('td a'));
}).catch(function (err) {
    console.log(err);
});
