/**
 * To perform simple fetch requests with no GraphQL
 * client attached.
 */

module.exports = async function simplyFetchFromGraph({query, variables}) {
  const response = await fetch(
    'https://api.crystallize.com/furniture/catalogue',
    {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({query, variables}),
    },
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
};
