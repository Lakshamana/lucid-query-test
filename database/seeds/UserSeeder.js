'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')
const { randomInt } = use('App/Helpers')

class UserSeeder {
  async run () {
    await Factory
      .model('App/Models/User')
      .createMany(10)

    const users = await User.all()
    for (const user of users.rows) {
      let randomIndex = randomInt(0, 9)
      let best_friend_id = users.rows[randomIndex].id
      if (user.id === best_friend_id) {
        best_friend_id = users.rows[0].id
      }

      user.best_friend_id = best_friend_id
      await user.save()
    }
  }
}

module.exports = UserSeeder
