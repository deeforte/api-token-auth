'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signin success ran data is ', data)
  store.user = data.user
  console.log(store)
}

const signInFailure = (error) => {
  console.error('signin failure ran error is ', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
