import { fetch } from 'undici'

const response = await fetch('http://localhost:3000')
const body = await response.json()

console.log('body', body)
