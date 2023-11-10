/**
 * @jest-environment node
 */

import { EpisodeResponse } from '../fixtures/EpisodeResponse';
import { http, HttpResponse } from 'msw';
const URL = 'https://stapi.co/api/v1/rest/episode';

export const basic = http.get(URL, () => {
  return HttpResponse.json(EpisodeResponse);
});
