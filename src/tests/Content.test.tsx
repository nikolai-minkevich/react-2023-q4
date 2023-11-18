/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Content from '../components/Content';
import { cards } from '../fixtures/Cards';
import { page } from '../fixtures/Page';

describe('Card List', () => {
  test('Verify that the component renders the specified number of cards', async () => {
    render(<Content cards={cards} page={page} />);
    const headings = await screen.findAllByRole('heading');
    expect(headings).toHaveLength(2);
  });
  test('Check that an appropriate message is displayed if no cards are present', async () => {
    render(<Content cards={null} page={null} />);
    const loader = await screen.findByLabelText('loader');
    expect(loader).toBeInTheDocument();
  });

  test('no data', async () => {
    render(<Content cards={[]} page={page} />);
    const noDataText = await screen.findByText(
      'No data found for this search query'
    );
    expect(noDataText).toBeInTheDocument();
  });
});
