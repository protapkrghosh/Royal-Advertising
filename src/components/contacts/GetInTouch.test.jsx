import React from 'react';
import { render, screen } from '@testing-library/react';
import GetInTouch from './GetInTouch';

describe('GetInTouch component', () => {
  test('renders GetInTouch component correctly', () => {
    render(<GetInTouch />);


    expect(screen.getByTestId('email-icon')).toBeInTheDocument();
    expect(screen.getByTestId('address-icon')).toBeInTheDocument();
    expect(screen.getByTestId('telephone-icon')).toBeInTheDocument();

 
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Address/i)).toBeInTheDocument();
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();

    expect(screen.getByText(/info@refletivedesign.in/i)).toBeInTheDocument();
    expect(screen.getByText(/support@reflectivedesign.in/i)).toBeInTheDocument();
    expect(screen.getByText(/Plot No.10, Pratap Nagar, Tedhi Pulia Ring Road, Vikas Nagar, Lucknow, Uttar Pradesh – 226022/i)).toBeInTheDocument();
    expect(screen.getByText(/\+91-8858230920/i)).toBeInTheDocument();
    expect(screen.getByText(/\+91-8858130920/i)).toBeInTheDocument();
  });
});
