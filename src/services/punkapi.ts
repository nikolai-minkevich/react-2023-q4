import ICard from '../interfaces/ICard';

const ROOT = 'https://api.punkapi.com/v2';

async function fetchAll(term: string | void): Promise<ICard[]> {
  console.log('term', term);

  const url = `${ROOT}/beers?`;

  let params = null;
  if (term) {
    params = new URLSearchParams({ beer_name: term }).toString();
  }

  const response = await window
    .fetch(url + params, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
    .then((response) => response.json());

  return response || [];
}

export default fetchAll;
