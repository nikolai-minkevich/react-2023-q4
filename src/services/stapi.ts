import IEpisodesResponse from '../interfaces/IEpisodesResponse';

const ROOT = 'https://stapi.co/api/v1/rest';

async function fetchAll(term: string | null): Promise<IEpisodesResponse> {
  const url = `${ROOT}/episode/search?`;

  let body = null;
  if (term) {
    body = new URLSearchParams({ search: term }).toString();
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body,
  })
    .then((response) => response.json())
    .then((response) => response);

  return response || {};
}

export default fetchAll;
