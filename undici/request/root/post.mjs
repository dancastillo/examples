import { request } from 'undici'

const {
  statusCode,
  headers,
  trailers,
  body
} = await request('http://localhost:3000', { 
  method: 'POST',
  body: JSON.stringify({
    method: 'POST',
    from: 'from root'
  }),
  headers: {
    'content-type': 'application/json',
  }
})

console.log('statusCode', statusCode)
console.log('headers', headers)
console.log('trailers', trailers)
console.log('body', await body.json())
