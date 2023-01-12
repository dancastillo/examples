'use strict'

module.exports = async function (fastify, opts) {
  const { validate } = opts

  fastify.get('/', validate.get, async function (request, reply) {
    return { hello: 'from baz' }
  })

  fastify.post('/', validate.post, async function (request, reply) {
    const { method, from } = request.body
    return reply.send({
      hello: from,
      method
    })
  })
}
