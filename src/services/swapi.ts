import ICard from '../interfaces/ICard';

const ROOT = 'https://swapi.dev/api';

async function fetchAll(term: string | void): Promise<ICard[]> {
  const url = `${ROOT}/films?`;

  let params = null;
  if (term) {
    params = new URLSearchParams({ search: term }).toString();
  }

  const response = await fetch(url + params, {
    method: 'GET',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((response) => response.results);

  return response || [];
}

export default fetchAll;
