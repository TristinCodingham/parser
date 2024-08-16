const { Parser } = require('../src/parser/Parser');

const parser = new Parser();

const ast = parser.feed('"hello world!"');

console.log(ast);