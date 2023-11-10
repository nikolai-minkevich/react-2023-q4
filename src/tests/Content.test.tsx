/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import Content from '../components/Content';
import { cards } from '../fixtures/Cards';
import { page } from '../fixtures/Page';

describe('Content', () => {
  test('render', async () => {
    render(<Content cards={cards} page={page} />);
    const headings = await screen.findAllByRole('heading');
    expect(headings).toHaveLength(2);
  });
  test('loader', async () => {
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
