'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class DatabaseException extends LogicalException {

  constructor(message, status = 500, code = 'E_DB_ERROR') {
    super(message, status, code)
  }
  /**
   * Handle this exception by itself
   */
  // handle () {}
}

module.exports = DatabaseException
