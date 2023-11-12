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
import NotFound from '../components/NotFound';

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

  test('Make sure the component updates URL query parameter when page changes.', async () => {
    server.use(episodes.basic, episode.basic);

    setup();

    const cardsLoader = await screen.findByLabelText('loader');
    expect(cardsLoader).toBeInTheDocument();
    const nextPage = await screen.findByLabelText('next page');
    await userEvent.click(nextPage);

    await screen.findAllByLabelText('card');

    expect(window.location).not.toEqual('?pageNumber=1&pageSize=5&');
    const prevPage = await screen.findByLabelText('next page');
    await userEvent.click(prevPage);

    await screen.findAllByLabelText('card');

    expect(window.location).not.toEqual('?pageNumber=0&pageSize=5&');
  });

  test('Check that the component retrieves the value from the local storage upon mounting', async () => {
    expect(localStorage.getItem('term')).not.toEqual('test');
    localStorage.setItem('term', 'test');
    expect(localStorage.getItem('term')).toEqual('test');
    setup();
    const searchInput = await screen.findByLabelText('search input');
    expect(searchInput).toHaveValue('test');
  });

  test('Ensure that the 404 page is displayed when navigating to an invalid routu', async () => {
    render(
      <MemoryRouter>
        <PageStateProvider>
          <EpisodesResponseProvider>
            <EpisodeResponseProvider>
              <NotFound />
            </EpisodeResponseProvider>
          </EpisodesResponseProvider>
        </PageStateProvider>
      </MemoryRouter>
    );
    const notFound = await screen.findByLabelText('not found');
    expect(notFound).toBeInTheDocument();
  });
});
