import { request } from 'undici'

const {
  statusCode,
  headers,
  trailers,
  body
} = await request('http://localhost:3000')

console.log('statusCode', statusCode)
console.log('headers', headers)
console.log('trailers', trailers)
console.log('body', await body.json())
