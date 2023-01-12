import { fetch } from 'undici'

const response = await fetch('http://localhost:3000', {
  method: 'POST',
  body: JSON.stringify({
    method: 'POST',
    from: 'from root'
  }),
  headers: {
    'content-type': 'application/json',
  }
})
const body = await response.json()

console.log('body', body)
