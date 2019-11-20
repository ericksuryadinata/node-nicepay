'use strict'

const _ = require('lodash')
const GE = require('./Exceptions/InvalidArgumentException.js')

class Util {
  checkSetup (original, validate) {
    const missingParameter = _.difference(validate, _.keys(original))
    const invalidParameter = _.difference(_.keys(original), validate)

    if (missingParameter.length !== 0 && invalidParameter.length === 0) {
      const errorMessage = `Missing Parameter ${_.join(missingParameter, ',')}`
      throw GE.missingParameter(errorMessage)
    } else if (missingParameter.length === 0 && invalidParameter.length !== 0) {
      const errorMessage = `Invalid Parameter ${_.join(invalidParameter, ',')}`
      throw GE.missingParameter(errorMessage)
    } else if (missingParameter.length !== 0 && invalidParameter.length !== 0) {
      const errorMessage = `Invalid Parameter ${_.join(invalidParameter, ',')} and Missing Parameter ${_.join(missingParameter, ',')}`
      throw GE.missingAndInvalidParameter(errorMessage)
    }
  }

  checkRegis (data, mandatory) {
    const missingParameter = _.difference(mandatory, _.keys(data))
    if (missingParameter.length !== 0) {
      const errorMessage = `Missing Parameter ${_.join(missingParameter, ',')}`
      throw GE.missingParameter(errorMessage)
    }
  }
}

module.exports = new Util()
