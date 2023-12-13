import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer component', () => {
  test('renders Footer component correctly', () => {
    render(<Footer />);

  
    expect(screen.getByText(/Office/i)).toBeInTheDocument();
    expect(screen.getByText(/Visit Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Newsletter/i)).toBeInTheDocument();

    
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/Contacts/i)).toBeInTheDocument();
    expect(screen.getByText(/Blogs/i)).toBeInTheDocument();

   
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();

    expect(screen.getByText(/Plot No.10, Pratap Nagar, Tedhi Pulia Ring Road, Vikas Nagar, Lucknow, Uttar Pradesh – 226022/i)).toBeInTheDocument();
    expect(screen.getByText(/info@refletivedesign.in/i)).toBeInTheDocument();
    expect(screen.getByText(/Social Media Marketing/i)).toBeInTheDocument();
    expect(screen.getByText(/SEO/i)).toBeInTheDocument();
    expect(screen.getByText(/Graphic Designing/i)).toBeInTheDocument();
    expect(screen.getByText(/Website Designing/i)).toBeInTheDocument();
    expect(screen.getByText(/3D Walkthrough/i)).toBeInTheDocument();
    expect(screen.getByText(/Video Editing & Animation/i)).toBeInTheDocument();

  
  });
});
