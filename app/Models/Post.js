'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {

  comments () {
    return this.hasMany('App/Models/Comment')
  }

  author () {
    return this.hasOne('App/Models/User', 'id', 'author_id')
  }

  static scopeWithBestFriendComments (query, user) {
    return query
      .with('comments', comments => {
        comments
          .where('best_friend_id', user.id)
      })
  }
}

module.exports = Post
