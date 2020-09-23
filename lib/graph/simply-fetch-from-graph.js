/**
 * To perform simple fetch requests with no GraphQL
 * client attached.
 */

module.exports = async function simplyFetchFromGraph({
  uri = `https://api.crystallize.com/furniture/catalogue`,
  query,
  variables,
}) {
  const body = JSON.stringify({query, variables});

  const response = await fetch(uri, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body,
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
};
