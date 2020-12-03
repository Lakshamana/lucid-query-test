'use strict'

/*
|--------------------------------------------------------------------------
| PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class PostSeeder {
  async run () {
    const users = await User.all()

    for (const user of users) {
      const posts = Factory
        .model('App/Models/Post')
        .createMany(3)

      await user.posts().saveMany(posts)
    }
  }
}

module.exports = PostSeeder
