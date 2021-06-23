'use strict'

/*
|--------------------------------------------------------------------------
| CommentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Post = use('App/Models/Post')
const User = use('App/Models/User')
const { randomInt } = use('App/Helpers')

class CommentSeeder {
  async run () {
    const posts = await Post.all()

    for (const post of posts.rows) {
      const comments = await Factory
        .model('App/Models/Comment')
        .makeMany(10)
      
      const users = await User.all()
      for (const comment of comments) {
        const randomIndex = randomInt(0, 9)
        comment.author_id = users.rows[randomIndex].id
      }
    
      await post.comments().saveMany(comments)
    }
  }
}

module.exports = CommentSeeder
