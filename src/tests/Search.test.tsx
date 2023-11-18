/**
 * @jest-environment jsdom
 */

import { RenderResult, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { PageStateProvider } from '../contexts/PageStateContext';
import { EpisodesResponseProvider } from '../contexts/EpisodesResponseContext';
import { EpisodeResponseProvider } from '../contexts/EpisodeResponseContext';
import Navbar from '../components/Nav/Nav';

const setup = (): RenderResult => {
  return render(
    <MemoryRouter>
      <PageStateProvider>
        <EpisodesResponseProvider>
          <EpisodeResponseProvider>
            <Navbar />
          </EpisodeResponseProvider>
        </EpisodesResponseProvider>
      </PageStateProvider>
    </MemoryRouter>
  );
};

describe('Search component', () => {
  test('Verify that clicking the Search button saves the entered value to the local storage', async () => {
    setup();

    const searchInput = await screen.findByLabelText('search input');
    const searchButton = await screen.findByLabelText('search button');
    expect(localStorage.getItem('term')).not.toEqual('test');
    await userEvent.type(searchInput, 'test');
    await userEvent.click(searchButton);
    expect(localStorage.getItem('term')).toEqual('test');
  });
});
