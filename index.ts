import figlet from 'figlet';

const server = Bun.serve({
  port: 3000,
  fetch(_request, _server) {
    const body = figlet.textSync('Hello Bun!!!', {
      font: 'Star Wars',
      width: 80,
      whitespaceBreak: true,
    });
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port}`);
