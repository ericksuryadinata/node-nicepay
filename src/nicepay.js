'use strict'

const _ = require('lodash')
const util = require('./util.js')
const crypto = require('crypto')
const mandatory = require('./mandatory.js')
const Send = require('./sender.js')
const RE = require('./Exceptions/RuntimeException.js')

class Nicepay {
  async VA(data) {
    if (data.merchantToken === undefined) {
      data.merchantToken = this.merchantToken
    }

    if (data.cartData === '' || data.cartData === undefined) {
      data.cartData = '{}'
    }

    if (data.merFixAcctId === undefined) {
      data.merFixAcctId = ''
    }
    _.assign(data, this.options)

    util.checkRegis(data, _.concat(mandatory.ALL(), mandatory.VA()))
    return Send.registration(this.URL, data)
  }

  async CC(data) {
    if (data.merchantToken === undefined) {
      data.merchantToken = this.merchantToken
    }

    if (data.cartData === '' || data.cartData === undefined) {
      data.cartData = '{}'
    }
    _.assign(data, this.options)
    util.checkRegis(data, _.concat(mandatory.ALL(), mandatory.CC()))
    return Send.registration(this.URL, data)
  }

  async CVS(data) {
    if (data.merchantToken === undefined) {
      data.merchantToken = this.merchantToken
    }
    if (data.cartData === '' || data.cartData === undefined) {
      data.cartData = '{}'
    }
    _.assign(data, this.options)
    util.checkRegis(data, _.concat(mandatory.ALL(), mandatory.CVS()))
    return Send.registration(this.URL, data)
  }

  async clickPay(data) {
    if (data.merchantToken === undefined) {
      data.merchantToken = this.merchantToken
    }
    if (data.cartData === '' || data.cartData === undefined) {
      data.cartData = '{}'
    }
    _.assign(data, this.options)
    util.checkRegis(data, _.concat(mandatory.ALL(), mandatory.CLICKPAY()))
    return Send.registration(this.URL, data)
  }

  async eWallet(data) {
    if (data.merchantToken === undefined) {
      data.merchantToken = this.merchantToken
    }
    if (data.cartData === '' || data.cartData === undefined) {
      data.cartData = '{}'
    }
    _.assign(data, this.options)
    util.checkRegis(data, _.concat(mandatory.ALL(), mandatory.EWALLET()))
    return Send.registration(this.URL, data)
  }

  async inquiry(data) {
    if (data.merchantToken === undefined) {
      data.merchantToken = this.merchantToken
    }
    _.assign(data, this.options)

    util.checkRegis(data, mandatory.INQUIRY())
    return Send.inquiry(this.URL, data)
  }

  async cancel(data) {
    util.checkRegis(data, mandatory.CANCEL())
    return Send.cancel(this.URL, data)
  }

  setup(options) {
    try {
      util.checkSetup(options, mandatory.SETUP())
      this.URL = _.get(options, 'url')
      _.unset(options, 'url')
      let key = `${options.timeStamp}${options.iMid}${options.referenceNo}${options.amt}${options.merchantKey}`
      this.merchantToken = crypto.createHash('sha256').update(Buffer.from(key, 'ascii')).digest('hex')
      _.unset(options, 'merchantKey')
      this.options = options
      return this
    } catch (error) {
      return RE.incompleteBuild(error)
    }
  }
}

module.exports = Nicepay
