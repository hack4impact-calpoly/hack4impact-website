import fetch from 'node-fetch';
import config from '../config';

async function runQuery(query: String) {
  const space = config.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = config.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query }),
    },
  );

  const { data } = await res.json();
  return data;
}

module.exports = { query: runQuery };
