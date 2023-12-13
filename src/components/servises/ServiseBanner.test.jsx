import React from 'react';
import { render, screen,waitFor } from '@testing-library/react';
import ServiseBanner from './ServiseBanner';

describe('ServiseBanner',  () => {
  test('renders content correctly', async() => {
    render(<ServiseBanner />);
    const headingElement = screen.getByText(/Our Services/i);
    expect(headingElement).toBeInTheDocument();
    const descriptionElement = screen.getByText(/Our Experts are Ready to Help/i);
    expect(descriptionElement).toBeInTheDocument();   
      const animationElement = screen.getByTestId('servises-animation');
      expect(animationElement).toBeInTheDocument();  
  });
});
