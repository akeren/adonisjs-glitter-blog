'use strict'

class StorePost {
  get rules() {
    return {
      title: 'required|min:3|max:255',
      body: 'required|min:3',
    }
  }
}

module.exports = StorePost
