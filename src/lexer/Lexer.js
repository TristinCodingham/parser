class Lexer {
    static WhiteSpace = new Lexer(RegExp(/^[ \t]+/));
    static Identifier = new Lexer(RegExp(/^\w+/));

    constructor(regex) {
        this._regex = regex;
    }
}

module.exports = { Lexer };