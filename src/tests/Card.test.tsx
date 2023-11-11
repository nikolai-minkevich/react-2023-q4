/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';
import { card } from '../fixtures/Card';

describe('Card', () => {
  test('Ensure that the card component renders the relevant card data', async () => {
    render(<Card card={card} />);

    await screen.findByRole('heading');

    expect(screen.getByRole('heading')).toHaveTextContent(card.title);
    expect(screen.getByLabelText('us air date')).toHaveTextContent(
      card.usAirDate
    );
  });
});
