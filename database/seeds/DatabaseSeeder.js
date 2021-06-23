'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const seeders = [
  require('./UserSeeder'),
  require('./PostSeeder'),
  require('./CommentSeeder')
]

class DatabaseSeeder {
  async run () {
    for (const seeder of seeders) {
      const source = new seeder()
      await source.run()
    }
  }
}

module.exports = DatabaseSeeder
