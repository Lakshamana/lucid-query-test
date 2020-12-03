'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const DatabaseException = use('App/Exceptions/DatabaseException')

/**
 * Base service class
 */
class Service {

  constructor (model, fillable = []) {
    this.model = use(`App/Models/${model}`)
    this.fillable = fillable
  }
  /**
   * Show a list of all .
   * GET 
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ request, response }) {
    try {
      const data = await this.model.all()

      return response.ok({ data })
    } catch(error) {
      throw new DatabaseException(error.messsage)
    }
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
    const data = request.only(this.fillable)

    try {
      await this.model.create(data)

      return response.ok(data)
    } catch (err) {
      throw new DatabaseException(error.messsage)
    }
  }

  /**
   * Display a single .
   * GET /:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ request, response }) {
    return response.ok(request.model)
  }

  /**
   * Update  details.
   * PUT or PATCH /:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ request, response }) {
    try {
      const data = request.only(this.fillable)
      const { model } = request

      model.merge(data)
      await model.save()
    } catch (error) {
      throw new DatabaseException(error.messsage)
    }
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
    try {
      const { model } = request

      await model.delete()
    } catch (error) {
      throw new DatabaseException(error.messsage)
    }
  }
}

module.exports = Service
