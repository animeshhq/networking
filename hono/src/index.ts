import { Hono } from 'hono';
import users from '../routes/users';
import posts from '../routes/posts';
import type {User} from '../../types/user';

const app = new Hono().basePath("/api");

app.get('/', (c) => {
  console.log(c);
  return c.text("Hello");
});

app.get('/hello', (c) => {
  return c.json({
    ok: true,
    message: 'Hello Hono!',
  })
});

app.route('/users', users);
app.route('/posts', posts);

app.notFound((c) => {
  return c.text('404 not found', 404)
});

export default app;
