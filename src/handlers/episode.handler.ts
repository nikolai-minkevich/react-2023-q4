/**
 * @jest-environment node
 */

import { EpisodeResponse } from '../fixtures/EpisodeResponse';
import { http, HttpResponse } from 'msw';

const URL = 'https://stapi.co/api/v1/rest/episode?uid=EPMA0000001002';

export const basic = http.get(
  // The "/pets" string is a path predicate.
  // Only the GET requests whose path matches
  // the "/pets" string will be intercepted.
  URL,
  // The function below is a "resolver" function.
  // It accepts a bunch of information about the
  // intercepted request, and decides how to handle it.
  () => {
    return HttpResponse.json(EpisodeResponse);
  }
);
