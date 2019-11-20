'use strict'

module.exports = {
  ALL: function () {
    return [
      'timeStamp', 'iMid', 'payMethod', 'currency',
      'amt', 'referenceNo', 'goodsNm', 'billingNm', 'billingPhone', 'billingEmail',
      'billingCity', 'billingState', 'billingPostCd', 'billingCountry', 'dbProcessUrl',
      'merchantToken', 'userIP', 'cartData'
    ]
  },
  CC: function () {
    return [
      'instmntType', 'instmntMon', 'recurrOpt'
    ]
  },
  VA: function () {
    return [
      'bankCd', 'vacctValidDt', 'vacctValidTm', 'merFixAcctId'
    ]
  },
  CVS: function () {
    return [
      'mitraCd', 'payValidDt', 'payValidTm'
    ]
  },
  CLICKPAY: function () {
    return [
      'bankCd', 'mRefNo'
    ]
  },
  EWALLET: function () {
    return [
      'mitraCd'
    ]
  },
  INQUIRY: function () {
    return [
      'timeStamp', 'tXid', 'iMid', 'referenceNo', 'amt', 'merchantToken'
    ]
  },
  CANCEL: function () {
    return [
      'timeStamp', 'tXid', 'iMid', 'payMethod', 'cancelType',
      'merchantToken', 'preauthToken', 'amt'
    ]
  },
  SETUP: function () {
    return [
      'timeStamp', 'iMid', 'referenceNo', 'amt', 'merchantKey', 'url'
    ]
  }
}
