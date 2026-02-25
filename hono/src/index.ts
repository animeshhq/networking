import { Hono } from 'hono'
import type {User} from '../../types/user'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/hello', (c) => {
  return c.json({
    ok: true,
    message: 'Hello Hono!',
  })
})

app.notFound((c) => {
  return c.text('Custom 404 Message', 404)
})

export default app
