import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SuggestionCard from './SuggestionCard';

test('renders SuggestionCard component', () => {
  render(
    <SuggestionCard
      placeSuggestions={[]}
      inputValue=""
      setInputValue={() => {}}
      lodgignSuggestions={[]}
    />
  );
});

test('displays location suggestions', () => {
    const placeSuggestions = [
      { structured_formatting: { main_text: 'Location 1', secondary_text: 'Secondary text' } },
      { structured_formatting: { main_text: 'Location 2', secondary_text: 'Secondary text' } }
    ];
  
    render(
      <SuggestionCard
        placeSuggestions={placeSuggestions}
        inputValue="New York"
        setInputValue={() => {}}
        lodgignSuggestions={[]}
      />
    );
  
    expect(screen.getByText('Location 1')).toBeInTheDocument();
    expect(screen.getByText('Location 2')).toBeInTheDocument();
  });

  test('displays hotel suggestions', () => {
    const lodgignSuggestions = [
      { structured_formatting: { main_text: 'Hotel 1' }, terms: [{ value: 'Term' }] },
      { structured_formatting: { main_text: 'Hotel 2' }, terms: [{ value: 'Term' }] }
    ];
  
    render(
      <SuggestionCard
        placeSuggestions={[]}
        inputValue="Hotel"
        setInputValue={() => {}}
        lodgignSuggestions={lodgignSuggestions}
      />
    );
  
    expect(screen.getByText('Hotel 1')).toBeInTheDocument();
    expect(screen.getByText('Hotel 2')).toBeInTheDocument();
  });

  test('clicking on suggestion opens new tab', () => {
    const placeSuggestions = [
      { structured_formatting: { main_text: 'Location 1', secondary_text: 'Secondary text' }, place_id: '123' }
    ];
  
    const openMock = jest.fn();
    window.open = openMock;
  
    const { getByText } = render(
      <SuggestionCard
        placeSuggestions={placeSuggestions}
        inputValue="New York"
        setInputValue={() => {}}
        lodgignSuggestions={[]}
      />
    );
  
    fireEvent.click(getByText('Location 1'));
    expect(openMock).toHaveBeenCalledWith('/details?123', '_blank');
  });