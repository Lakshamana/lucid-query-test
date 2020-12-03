'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/**
 * Base controller
 */
class Controller {

  constructor (model) {
    this.service = make(`App/Services/${model}`)
  }
  /**
   * Show a list of all .
   * GET 
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {
    await this.service.index({ request, response })
  }

  /**
   * Create/save a new .
   * POST 
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await this.service.store({ request, response })
  }

  /**
   * Display a single .
   * GET /:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {
    await this.service.show({ params, request, response })
  }

  /**
   * Update  details.
   * PUT or PATCH /:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    await this.service.update({ params, request, response })
  }

  /**
   * Delete a  with id.
   * DELETE /:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    await this.service.destroy({ params, request, response })
  }
}

module.exports = Controller
