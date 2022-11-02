import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormSwitch from './FormSwitch';

describe('<FormSwitch />', () => {
  test('it should mount', () => {
    render(<FormSwitch title={'Sign Up'} link={'/signup'} />);
    
    const formSwitch = screen.getByTestId('FormSwitch');

    expect(formSwitch).toBeInTheDocument();
  });
});