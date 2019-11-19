# NODE NICEPAY

Nicepay Payment Gateway SDK on Node.js

## Installing

`npm install node-nicepay`

## Example

```js
const Nicepay = require('node-nicepay')

const nicepay = new Nicepay()

// setup nicepay first
let setup = nicepay.setup(data)

// request to nicepay
let res = await nicepay.VA(dataVA)
```

or you can use chainable method

```js
let res = await nicepay.setup(data).VA(dataVA)
```

## API

setup(data)
VA(dataVA)
CC(dataCC)

## TODO

1. Manual validation, function like `addMandatoryValidation()`, right now, only mandatory field `Y`
2. Manual add value, function like `addParam()`, right now we pass JSON Object, because I think it's no need to add one by one
