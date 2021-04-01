addEventListener('fetch', function (event) {
  event.respondWith(handleRequest(event));
});

function handleRequest(event) {
  const response = new Response('Hello World!', {
    headers: { 'content-type': 'text/plain' }
  });
  return response;
}
