/**
 * Base class for all parsers.
 * Parser is object that performs specific parsing
 * and updates its result with data extracted from the image.
 */
export class Parser {
    constructor(parserType) {
        /** Type of parser */
        this.parserType = parserType;
        /** Defines/returns whether the parser configured with this parser settings object will be required or optional. */
        this.required = true;
    }
}

/**
* Possible states of the Parser's result
*/
export const ParserResultState = Object.freeze(
    {
        /** Parser result is empty */
        empty : 0,
        /** Parser result contains some values, but is incomplete or it contains all values, but some are uncertain */
        uncertain : 1,
        /** Parser result contains all required values */
        valid : 2
    }
);

/**
 * Base class for all parsers's result objects.
 * Parser result contains data extracted from the image.
 */
export class ParserResult {
    constructor(resultState) {
        /**
         * State of the result. It is always one of the values represented by ParserResultState enum
         */
        this.resultState = resultState;
    }
}