addEventListener('fetch', function (event) {
  event.respondWith(handleRequest(event));
});

function handleRequest(event) {
  const response = new Response(
    {
      accessKey: Deno.env.accessKey
    },
    {
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
      }
    });
  return response;
}
