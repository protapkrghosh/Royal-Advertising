import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeBanner from './HomeBanner';

describe('HomeBanner', () => {
  test('renders content correctly', () => {
    render(<HomeBanner />);

    const navbarElement = screen.getByTestId('navbar-component');
    expect(navbarElement).toBeInTheDocument();

    const headingElement = screen.getByText(/Boost Your Brand with Digital Strategies/i);
    expect(headingElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(/Give your brand a boost with our digital marketing agency/i);
    expect(descriptionElement).toBeInTheDocument();
  });
});
