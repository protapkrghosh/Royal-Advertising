import React from 'react';
import { render, screen,waitFor } from '@testing-library/react';
import ServiseBanner from './ServiseBanner';

describe('ServiseBanner',  () => {
  test('renders content correctly', async() => {
    render(<ServiseBanner />);

    // Check if the heading is present
    const headingElement = screen.getByText(/Our Services/i);
    expect(headingElement).toBeInTheDocument();

    // Check if the description text is present
    const descriptionElement = screen.getByText(/Our Experts are Ready to Help/i);
    expect(descriptionElement).toBeInTheDocument();   
      const animationElement = screen.getByTestId('servises-animation');
      expect(animationElement).toBeInTheDocument();  
  });
});
