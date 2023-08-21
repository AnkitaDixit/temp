import React from 'react';
import { render, fireEvent, screen, getByText, waitForElementToBeRemoved } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders SearchBar component', () => {
    render(<SearchBar />);
  });

test('handles input change', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText('Search hotels...');
    expect(inputElement).toBeDefined();
});

test('state updates on input change', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText('Search hotels...');
  
    fireEvent.change(inputElement, { target: { value: 'New Delhi' } });
  
    const suggestions = screen.queryAllByRole('listitem');
    expect(suggestions).toHaveLength(0); 
  });

