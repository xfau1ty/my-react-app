import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

jest.mock('../context/ModalContext', () => ({
  useModal: () => ({
    openModal: jest.fn()
  })
}));

describe('Header', () => {
  it('renders logo', () => {
    render(<Header />);
    expect(screen.getByText('TechNest')).toBeInTheDocument();
  });

  it('has working contact button', () => {
    render(<Header />);
    expect(screen.getByText('Заявка')).toBeInTheDocument();
  });
});