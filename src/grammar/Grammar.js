const { Lexer } = require('../lexer/Lexer');
const { Identifier, WhiteSpace, NL } = Lexer;

class Grammar {
    static statement = {Identifier, WhiteSpace, Identifier};
    static statements = [this.statement];
}

module.exports = { Grammar };