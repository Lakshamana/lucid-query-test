'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const DatabaseException = use('App/Exceptions/DatabaseException')

/**
 * Posts service class.
 */
class PostService extends Service {

  constructor () {
    super('Post', ['content', 'author_id'])
  }

  async postsWithBestFriendsComments ({ request, response }) {
    try {
      const posts = await Post
        .query()
        .withBestComments()
        .orderBy('created_at')
        .fetch()

      return response.ok({ data: posts.toJSON() })
    } catch (error) {
      throw new DatabaseException(error.message, 400)
    }
  }
}

module.exports = Service
