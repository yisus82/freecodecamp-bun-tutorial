import { Elysia } from 'elysia';

export const plugin = new Elysia()
  .state('plugin-version', 1)
  .get('greet-plugin', ({ store }) => `Hi from plugin v${store['plugin-version']}`);
