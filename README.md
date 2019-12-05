# NODE NICEPAY

Nicepay Payment Gateway SDK on Node.js

## Installing

`npm install node-nicepay`

## Example

```js
const Nicepay = require('node-nicepay')

const nicepay = new Nicepay()

// prepare the setup data
let setup = {}
setup.amt = 100000
setup.referenceNo = 'ORDER-NO-12345'
setup.timeStamp ='20191128'
setup.iMid = 'IONPAYTEST' // for testing purpose only
setup.merchantKey = '33F49GnCMS1mFYlGXisbUDzVf2ATWCl9k3R++d5hDd3Frmuos/XLx8XhXpe+LDYAbpGKZYSwtlyyLOtS/8aD7A==' // for testing purpose only
setup.url = 'https://dev.nicepay.co.id/'

// prepare the required data for Virtual Account
let data = {}
data.currency = 'IDR'
data.description = `Invoice No. ${referensiId}`
data.goodsNm = nameGoods
data.billingNm = username
data.billingPhone = noHp
data.billingEmail = email
data.billingAddr = alamat
data.billingCity = '-'
data.billingState = '-'
data.billingPostCd = '-'
data.billingCountry = 'Indonesia'
data.userIP = request.ip()
data.cartData = "{}"
data.payMethod = '02'
data.bankCd = 'CENA'
data.vacctValidDt = '20191128'
data.vacctValidTm = '105001'

// then setup nicepay first
let np = nicepay.setup(setup)

// request to nicepay
let res = await np.VA(data)
return res.data
```

or you can use chainable method

```js
let res = await nicepay.setup(setup).VA(data)
```

## API

## setup(data)

```js
let setup = {}
setup.amt = 100000
setup.referenceNo = 'ORDER-NO-12345'
setup.timeStamp ='20191128'
setup.iMid = 'IONPAYTEST' // for testing purpose only
setup.merchantKey = '33F49GnCMS1mFYlGXisbUDzVf2ATWCl9k3R++d5hDd3Frmuos/XLx8XhXpe+LDYAbpGKZYSwtlyyLOtS/8aD7A==' // for testing purpose only
setup.url = 'https://dev.nicepay.co.id/'

nicepay.setup(setup)
```

## REGISTRATION

1. __VA(dataVA)__
2. __CC(dataCC)__
3. __CVS(dataCVS)__
4. __clickPay(dataClickPay)__
5. __eWallet(dataeWallet)__

## PAYMENT

Nicepay doesn't provide API to API request, use POST, SUBMIT, or Redirect methode

Read detail [Payment Documentation](https://docs.nicepay.co.id/api-v2-ID.html#payment)

## INQUIRY

## TODO

1. Create Unit Testing
