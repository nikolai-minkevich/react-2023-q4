import ICard from '../interfaces/ICard';

const ROOT = 'https://api.punkapi.com/v2';

async function fetchAll(): Promise<ICard[]> {
  const url = `${ROOT}/beers`;

  const response = await window
    .fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
    .then((response) => response.json());

  return response || [];
}

export default fetchAll;
