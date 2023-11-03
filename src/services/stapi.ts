import IEpisodesResponse from '../interfaces/IEpisodesResponse';

const ROOT = 'https://stapi.co/api/v1/rest';

async function fetchAll(term: string | null): Promise<IEpisodesResponse> {
  const url = `${ROOT}/episode/search?`;

  console.log('term', term);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: null,
  })
    .then((response) => response.json())
    .then((response) => response);

  return response || {};
}

export default fetchAll;
