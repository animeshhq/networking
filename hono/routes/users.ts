import { Hono } from "hono";

const users = new Hono();

users.get('/', (c) => {
    return c.text("All users")
});

users.get('/:id', (c) => {
    const id = c.req.param("id");
    return c.text(`User ${id}`)
})

export default users