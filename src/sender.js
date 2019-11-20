'use strict'

const RE = require('./Exceptions/RuntimeException.js')
const axios = require('axios')

class Sender {
  async registration (url, data) {
    const config = {
      url: 'nicepay/direct/v2/registration',
      method: 'POST',
      baseURL: url,
      headers: { 'Content-type': 'application/json' },
      data: data
    }

    try {
      let response = await axios.request(config)
      return response
    } catch (error) {
      throw RE.incompleteRequest(error)
    }
  }

  async inquiry (url, data) {
    const config = {
      url: 'nicepay/direct/v2/inquiry',
      method: 'POST',
      baseURL: url,
      headers: { 'Content-type': 'application/json' },
      data: data
    }

    try {
      let response = await axios.request(config)
      return response
    } catch (error) {
      throw RE.incompleteRequest(error)
    }
  }

  async cancel (url, data) {
    const config = {
      url: 'nicepay/direct/v2/cancel',
      method: 'POST',
      baseURL: url,
      headers: { 'Content-type': 'application/json' },
      data: data
    }

    try {
      let response = await axios.request(config)
      return response
    } catch (error) {
      throw RE.incompleteRequest(error)
    }
  }
}

module.exports = new Sender()
