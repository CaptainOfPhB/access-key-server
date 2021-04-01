addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});

function handleRequest(event) {
  const response = new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
  return response;
}
