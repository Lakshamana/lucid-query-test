'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async faker => {
  return {
    username: faker.username(),
    password: await Hash.make(faker.password()),
    email: faker.email()
  }
})

Factory.blueprint('App/Models/Post', faker => {
  return {
    title: faker.sentence({ words: 5 }),
    content: faker.paragraph({ sentences: 5 })
  }
})

Factory.blueprint('App/Models/Comment', faker => {
  return {
    author_id: faker.integer({ min: 1, max: 10 }),
    content: faker.paragraph({ sentences: 3 })
  }
})
