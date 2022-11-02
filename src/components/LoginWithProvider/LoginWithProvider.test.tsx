import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginWithProvider from './LoginWithProvider';

describe('<LoginWithProvider />', () => {
  test('it should mount', () => {
    render(<LoginWithProvider />);
    
    const loginWithProvider = screen.getByTestId('LoginWithProvider');

    expect(loginWithProvider).toBeInTheDocument();
  });
});