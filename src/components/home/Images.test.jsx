import React from 'react';
import { render, screen } from '@testing-library/react';

import Images from './Images';

jest.mock('../../hooks/useAosInit', () => () => {});

describe('Images', () => {
  test('renders the component with images', () => {
    render(<Images />);
    const headingElement = screen.getByText(/Our gallery/i);
expect(headingElement).toBeInTheDocument();
    const images = screen.getAllByAltText(/gelary/i);
    expect(images.length).toBeGreaterThanOrEqual(1); 
  });
});
