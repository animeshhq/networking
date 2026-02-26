import { Hono } from "hono";

const posts = new Hono();

posts.get('/', (c) => {
    return c.text("All posts")
});

posts.get('/:id', (c) => {
    const id = c.req.param('id')
    return c.text(`Posts ${id}`)
});

export default posts