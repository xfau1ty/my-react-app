import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('Card renders correctly', () => {
  render(
    <Card 
      icon={<span>🎯</span>}
      title="Test Card"
      description="This is a test card"
    />
  );
  
  expect(screen.getByText('Test Card')).toBeInTheDocument();
  expect(screen.getByText('This is a test card')).toBeInTheDocument();
  expect(screen.getByText('🎯')).toBeInTheDocument();
});

test('Card handles click', () => {
  const handleClick = jest.fn();
  
  render(
    <Card 
      icon={<span>📱</span>}
      title="Clickable Card"
      description="Click me!"
      onClick={handleClick}
    />
  );
  
  screen.getByText('Clickable Card').click();
  expect(handleClick).toHaveBeenCalledTimes(1);
});