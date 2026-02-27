import { Hono } from "hono";
import type {User} from '../types/user';

const users = new Hono();

const data: User[] = [
    {id: 1, name: "Animesh", email: "animesh@gmail.com", role: "admin"}
]

users.get('/', (c) => {
    return c.json(data)
});

users.get('/:id', (c) => {
    const id = c.req.param("id");
    return c.text(`User ${id}`)
})

export default users