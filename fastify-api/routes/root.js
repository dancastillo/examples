'use strict'

module.exports = async function (fastify, opts) {
  const { validate } = opts

  fastify.get('/', validate.get, async function (request, reply) {
    return { hello: 'from root' }
  })

  fastify.post('/', validate.post, async function (request, reply) {
    const { method, from } = request.body
    return reply.send({
      hello: from,
      method
    })
  })

  fastify.put('/', async function (request, reply) {
    return { put: 'from root' }
  })

  fastify.delete('/', async function (request, reply) {
    return { delete: 'from root' }
  })
}
