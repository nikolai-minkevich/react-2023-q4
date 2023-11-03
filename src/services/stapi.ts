import IEpisode from '../interfaces/IEpisode';

const ROOT = 'https://stapi.co/api/v1/rest';

async function fetchAll(term: string | null): Promise<IEpisode[]> {
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
    .then((response) => response.episodes);

  return response || [];
}

export default fetchAll;
