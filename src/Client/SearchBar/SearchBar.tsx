import React, { useState, useRef } from 'react';
import './SearchBar.css';
import _ from 'lodash';
import { Place, Lodge } from '../../types'
import { getLocalitySuggestions, getLodgingSuggestions } from '../../utils/api';
import SuggestionCard from '../SuggestionCard/SuggestionCard';

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [placeSuggestions, setPlaceSuggestions] = useState<Place[]>([]);
  const [lodgignSuggestions, setLodgignSuggestions] = useState<Lodge[]>([]);

  const debouncedSearch = useRef<(_.DebouncedFunc<(value: string) => void>) | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    if (debouncedSearch.current) {
      debouncedSearch.current.cancel();
    }
    debouncedSearch.current = _.debounce(async (newValue: string) => {
      // calling suggestions API here after delay
      const getLocality = getLocalitySuggestions({ input: newValue })
      const getLodging = getLodgingSuggestions({ input: newValue })
      Promise.all([getLocality, getLodging])
        .then((data: any[]) => {
          setPlaceSuggestions(data[0])
          setLodgignSuggestions(data[1])
        })
        .catch((error) => {
          console.error(error.message);
        });
    }, 200);
    debouncedSearch.current(event.target.value);
  };

  return (
    <div className="Searchcontainer">
      <h1 className="title">Book your motel</h1>
    <div className="input-card-dropdown">
          <div className="input-wrapper">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search hotels..."
              className="search-input"
            />
          </div>
          <SuggestionCard 
          placeSuggestions={placeSuggestions}
          inputValue={inputValue}
          setInputValue={setInputValue}
          lodgignSuggestions={lodgignSuggestions}
          />
    </div>
    </div>
  );
};

export default SearchBar;