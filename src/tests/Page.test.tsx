/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Page from '../components/Page';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import * as episodes from '../handlers/episodes.handler';
import * as episode from '../handlers/episode.handler';
import { PageStateProvider } from '../contexts/PageStateContext';
import { EpisodesResponseProvider } from '../contexts/EpisodesResponseContext';
import { EpisodeResponseProvider } from '../contexts/EpisodeResponseContext';
const server = setupServer(episodes.basic, episode.basic);

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Detailed Card', () => {
  test('detailed card component correctly displays the detailed card data', async () => {
    server.use(episodes.basic, episode.basic);
    render(
      <MemoryRouter>
        <PageStateProvider>
          <EpisodesResponseProvider>
            <EpisodeResponseProvider>
              <Page />
            </EpisodeResponseProvider>
          </EpisodesResponseProvider>
        </PageStateProvider>
      </MemoryRouter>
    );

    const loader = await screen.findByLabelText('loader');
    expect(loader).toBeInTheDocument();
    const cardsNodes = await screen.findAllByLabelText('card');
    await userEvent.click(cardsNodes[0]);

    const actorName = await screen.findByText('Bradley Thompson');
    expect(actorName).toBeInTheDocument();
  });
});
