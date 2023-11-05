import IEpisodesResponse from '../interfaces/IEpisodesResponse';

const ROOT = 'https://stapi.co/api/v1/rest';

interface IGetEpisodesProps {
  term: string;
  pageNumber?: number;
  pageSize?: number;
}

async function getEpisodes({
  term,
  pageNumber,
  pageSize,
}: IGetEpisodesProps): Promise<IEpisodesResponse> {
  let url = `${ROOT}/episode/search?`;

  // todo refactor
  if (pageNumber) {
    url += `pageNumber=${pageNumber}&`;
  }

  if (pageSize) {
    url += `pageSize=${pageSize}&`;
  }

  let body = null;
  if (term) {
    body = new URLSearchParams({ title: term, name: term }).toString();
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

export default getEpisodes;
