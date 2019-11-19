'use strict'

const NE = require('node-exceptions')

class RuntimeException extends NE.RuntimeException {

    incompleteRequest(errorMessage) {
        return new this('Incomplete or Error Occured while requesting with error message ' + errorMessage, 500, 'NP_INCOMPLETE_REQUEST')
    }
}

module.exports = new RuntimeException