'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {
  author () {
    return this.hasOne('App/Models/User', 'id', 'author_id')
  }
}

module.exports = Comment
