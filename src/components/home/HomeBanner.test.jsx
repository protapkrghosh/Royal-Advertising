import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeBanner from './HomeBanner';

describe('HomeBanner', () => {
  test('renders video and content', () => {
    render(<HomeBanner />);

    // Check if the video element is present
    const videoElement = screen.getByTestId('home-banner-video');
    expect(videoElement).toBeInTheDocument();

    // Check if the content is present
    const contentText = screen.getByText(/Boost Your Brand with Digital Strategies/i);
    expect(contentText).toBeInTheDocument();
  });

  test('renders Navbar component', () => {
    render(<HomeBanner />);

    // Check if the Navbar component is present
    const navbarElement = screen.getByTestId('navbar-component');
    expect(navbarElement).toBeInTheDocument();
  });
});