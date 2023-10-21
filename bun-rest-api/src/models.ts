import { t } from 'elysia';

export const postBodyDTO = t.Object({
  title: t.String(),
  content: t.Optional(t.String()),
});

export const postResponseDTO = t.Object({
  id: t.Number(),
  title: t.String(),
  content: t.Optional(t.String()),
});
