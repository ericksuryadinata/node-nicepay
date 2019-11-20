'use strict'

const NE = require('node-exceptions')

class InvalidArgumentException extends NE.InvalidArgumentException {
  missingParameter (errorMessage) {
    return new InvalidArgumentException(errorMessage, 500, 'NP_MISSING_PARAMETER')
  }

  invalidParameter (errorMessage) {
    return new InvalidArgumentException(errorMessage, 500, 'NP_INVALID_PARAMETER')
  }

  missingAndInvalidParameter (errorMessage) {
    return new InvalidArgumentException(errorMessage, 500, 'NP_MISSING_AND_INVALID_PARAMETER')
  }
}

module.exports = new InvalidArgumentException()
