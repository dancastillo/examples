import { request } from 'undici'

const { statusCode, body } = await request('http://localhost:3000', { method: 'PUT' })

console.log('statusCode', statusCode)
console.log('body', await body.json())
