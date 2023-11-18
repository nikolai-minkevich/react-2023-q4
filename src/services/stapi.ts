import IEpisodeResponse from '../interfaces/IEpisodeResponse';
import IEpisodesResponse from '../interfaces/IEpisodesResponse';

const ROOT = 'https://stapi.co/api/v1/rest';

interface IGetEpisodesProps {
  term: string;
  pageNumber?: number;
  pageSize?: number;
}

interface IGetEpisodeProps {
  uid: string;
}

export async function getEpisode({
  uid,
}: IGetEpisodeProps): Promise<IEpisodeResponse> {
  const url = `${ROOT}/episode?uid=${uid}`;
  // `${ROOT}/episode?uid=${uid}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => response.json())
    .then((response) => response);

  return response || {};
}

export async function getEpisodes({
  term,
  pageNumber,
  pageSize,
}: IGetEpisodesProps): Promise<IEpisodesResponse> {
  let url = `${ROOT}/episode/search?`;
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
