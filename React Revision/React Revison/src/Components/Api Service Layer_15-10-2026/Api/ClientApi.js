const BASE_URL = ( "https://jsonplaceholder.typicode.com");

function normalizeEndpoint(endpoint = "/") {
  return endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
}

async function get(endpoint) {
  const url = `${BASE_URL}${normalizeEndpoint(endpoint)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return response.json();
}

const ClientApi = { get };

export default ClientApi;