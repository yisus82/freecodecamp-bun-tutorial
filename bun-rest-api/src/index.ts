import { Elysia } from 'elysia';
import { plugin } from './plugin';

const app = new Elysia()
  .use(plugin)
  .state({
    version: '1.0.0',
  })
  .decorate('getDate', () => new Date())
  .get('/', () => 'Hello Elysia 🦊');

app.group('/posts', app =>
  app
    .get('/:id', ({ params: { id } }) => ({ id, title: `Learn Bun (Part ${id})` }))
    .post('/', ({ body, set }) => {
      set.status = 201;
      return body;
    })
);

app.group('/tracks', app =>
  app
    .get('/*', () => 'Track Route')
    .get('/', ({ store, getDate }) => ({
      tracks: [
        { id: 1, title: 'Learn Bun (Part 1)' },
        { id: 2, title: 'Learn Bun (Part 2)' },
        { id: 3, title: 'Learn Bun (Part 3)' },
      ],
      date: getDate().toDateString(),
      version: store.version,
      pluginVersion: store['plugin-version'],
    }))
);

app.listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
