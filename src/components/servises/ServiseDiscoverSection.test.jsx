import React from 'react';
import { render, screen } from '@testing-library/react';
import ServiceDiscoverSection from "./ServiseDiscoverSection"
describe('ServiceDiscoverSection', () => {
  it('renders the component with correct content', () => {
    render(<ServiceDiscoverSection />);
    expect(screen.getByText('WHO WE ARE')).toBeInTheDocument();
    expect(screen.getByText('Are You Ready to Grow With The Best Digital Marketing Company?')).toBeInTheDocument();
    expect(screen.getByText(/In the past few years, our digital marketing experts/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Discover Now/ })).toBeInTheDocument();
  });

});
