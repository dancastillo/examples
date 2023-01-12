module.exports = {
  get: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  post: {
    schema: {
      body: {
        type: 'object',
        properties: {
          method: { type: 'string' },
          from: { type: 'string' }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' },
            method: { type: 'string' }
          }
        }
      }
    }
  }
}
