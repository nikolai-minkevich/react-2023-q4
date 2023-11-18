/**
 * @jest-environment node
 */

import { EpisodesResponse } from '../fixtures/EpisodesResponse';
import { http, HttpResponse } from 'msw';
const URL = 'https://stapi.co/api/v1/rest/episode/search';

export const basic = http.post(URL, () => {
  return HttpResponse.json(EpisodesResponse);
});
