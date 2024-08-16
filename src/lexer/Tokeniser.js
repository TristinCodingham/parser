const { Lexer } = require('./Lexer');

class Tokeniser {
    static _state = {
        input: '',
        currentToken: null,
        pos: 0,
        col: 1,
        row: 1,
        offset: 0,
        isError: false,
        error: ''
    }
    
    static nextToken() {}
    static prevToken() {}
}

module.exports = { Tokeniser };