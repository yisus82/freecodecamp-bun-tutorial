import figlet from 'figlet';

const server = Bun.serve({
  port: 3000,
  fetch(request, _server) {
    const url = new URL(request.url);

    if (url.pathname === '/') {
      const body = figlet.textSync('Hello Bun!!!', {
        font: 'Star Wars',
        width: 80,
        whitespaceBreak: true,
      });
      return new Response(body);
    }

    if (url.pathname === '/about') {
      return new Response('This is Bun!');
    }

    if (url.pathname === '/contact') {
      return new Response('Contact us at bunisgreat@bun.com');
    }

    return new Response('Not found', { status: 404 });
  },
});

console.log(`Listening on http://localhost:${server.port}`);
