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

class CommentSeeder {
  async run () {
    const posts = await Post.all()

    for (const post of posts) {
      const comments = Factory
        .model('App/Models/Comment')
        .createMany(10)

      await post.comments().saveMany(comments)
    }
  }
}

module.exports = CommentSeeder
