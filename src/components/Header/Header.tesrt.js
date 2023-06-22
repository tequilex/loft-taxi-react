import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header', () => {
  it('should render correctly', () => {
    const { container } = render(<Header />);

    expect(container.getElementsByClassName('header').length).toBeTruthy()
  });
});