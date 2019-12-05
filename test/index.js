'use strict'

const Moment = require('moment')
const Nicepay = require('../src/index.js')

const nicepay = new Nicepay()

const data = {
  timeStamp: Moment().format('YMMDDHHmmss'),
  iMid: 'IONPAYTEST',
  referenceNo: 'KPINTAR0000000001',
  amt: '100000',
  merchantKey: '33F49GnCMS1mFYlGXisbUDzVf2ATWCl9k3R++d5hDd3Frmuos/XLx8XhXpe+LDYAbpGKZYSwtlyyLOtS/8aD7A==',
  url: 'https://dev.nicepay.co.id/'
}

// WRITE UNIT TESTING HERE
