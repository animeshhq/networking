import { Hono } from 'hono'
import type {User} from '../../types/user'

const app = new Hono().basePath("/api")

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/hello', (c) => {
  return c.json({
    ok: true,
    message: 'Hello Hono!',
  })
})

app.notFound((c) => {
  return c.text('404 not found', 404)
})

export default app
