import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/', () => 'Hello Elysia 🦊')
  .get('/post/:id', ({ params: { id } }) => ({ id, title: `Learn Bun (Part ${id})` }))
  .post('/post', ({ body, set }) => {
    set.status = 201;
    return body;
  })
  .get('/track/*', () => 'Track Route')
  .get('/tracks', () => ({
    tracks: [
      { id: 1, title: 'Learn Bun (Part 1)' },
      { id: 2, title: 'Learn Bun (Part 2)' },
      { id: 3, title: 'Learn Bun (Part 3)' },
    ],
  }))
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
