/**
 * @jest-environment node
 */

import { EpisodeResponse } from '../fixtures/EpisodeResponse';
import { http, delay, HttpResponse } from 'msw';
const URL = 'https://stapi.co/api/v1/rest/episode';

export const basic = http.get(URL, async () => {
  await delay(100);
  return HttpResponse.json(EpisodeResponse);
});
