import fetch from 'node-fetch';
// @ts-ignore
import env from '../config.ts';

async function getProjectsByYear(year: Number) {
  const space = env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: `{
          projects: projectCollection (where:{year: "${year}" }) {
            items {
              nonprofitName
              year
              blurb

              background {
                url(transform: {width:400, format:WEBP})
              }
            }
          }
        }`,
      }),
    },
  );

  const { data } = await res.json();
  const projects = data.projects.items;

  return projects;
}

module.exports = getProjectsByYear;
