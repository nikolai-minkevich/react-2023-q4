/**
 * @jest-environment jsdom
 */

import { RenderResult, render, screen } from '@testing-library/react';
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
import { EpisodeResponse } from '../fixtures/EpisodeResponse';
const server = setupServer(episodes.basic, episode.basic);

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const setup = (): RenderResult => {
  return render(
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
};

describe('Card component', () => {
  test('Validate that clicking on a card opens a detailed card component', async () => {
    server.use(episodes.basic, episode.basic);

    setup();

    const loader = await screen.findByLabelText('loader');
    expect(loader).toBeInTheDocument();
    const cardsNodes = await screen.findAllByLabelText('card');
    await userEvent.click(cardsNodes[0]);

    const detailedCard = await screen.findByLabelText('detailed card');
    expect(detailedCard).toBeInTheDocument();
  });
});

describe('Detailed Card component', () => {
  test('Check that a loading indicator is displayed while fetching data', async () => {
    server.use(episodes.basic, episode.basic);

    setup();

    const cardsLoader = await screen.findByLabelText('loader');
    expect(cardsLoader).toBeInTheDocument();
    const cardsNodes = await screen.findAllByLabelText('card');
    await userEvent.click(cardsNodes[0]);

    const deatiledCardLoader = await screen.findByLabelText(
      'detailed card loader'
    );
    expect(deatiledCardLoader).toBeInTheDocument();
  });

  test('Make sure the detailed card component correctly displays the detailed card data', async () => {
    server.use(episodes.basic, episode.basic);

    setup();

    const loader = await screen.findByLabelText('loader');
    expect(loader).toBeInTheDocument();
    const cardsNodes = await screen.findAllByLabelText('card');
    await userEvent.click(cardsNodes[0]);
    const deatiledCardLoader = await screen.findByLabelText(
      'detailed card loader'
    );
    expect(deatiledCardLoader).toBeInTheDocument();

    // TODO: add more data
    const actorName = await screen.findByText(
      EpisodeResponse.episode.writers[0].name
    );
    expect(actorName).toBeInTheDocument();
  });

  test('Ensure that clicking the close button hides the component', async () => {
    server.use(episodes.basic, episode.basic);

    setup();

    const loader = await screen.findByLabelText('loader');
    expect(loader).toBeInTheDocument();
    const cardsNodes = await screen.findAllByLabelText('card');
    await userEvent.click(cardsNodes[0]);
    const deatiledCardLoader = await screen.findByLabelText(
      'detailed card loader'
    );
    expect(deatiledCardLoader).toBeInTheDocument();

    const detailedCardComponent = await screen.findByLabelText('detailed card');
    expect(detailedCardComponent).toBeInTheDocument();
    const closeButton = await screen.findByLabelText('close button');
    await userEvent.click(closeButton);
    expect(detailedCardComponent).not.toBeInTheDocument();
  });

  test.todo(
    'Check that clicking triggers an additional API call to fetch detailed information.'
  );
  test.todo(
    'Make sure the component updates URL query parameter when page changes.'
  );
  test.todo(
    'Verify that clicking the Search button saves the entered value to the local storage.'
  );
  test.todo(
    'Check that the component retrieves the value from the local storage upon mounting.'
  );
});
