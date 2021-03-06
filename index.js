addEventListener('fetch', function (event) {
  event.respondWith(handleRequest(event));
});

function handleRequest(event) {
  const response = new Response(
    JSON.stringify({
      accessKey: Deno.env.get('accessKey')
    }),
    {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    });
  return response;
}
