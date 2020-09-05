// @flow
import React, { useCallback } from 'react';

type Props = {
   value: String,
   onChange: Function,
};

const SearchCityInput = ({ value, onChange }: Props) => {
  const handleChange =  useCallback((e) => { onChange(e.target.value)}, [onChange]);

  return (
    <div>
      <label htmlFor="search-input">Enter a french city</label>
      <input 
        id="search-input" 
        value={value}
        onChange={handleChange}
      />
    </div>
  )
};

export default SearchCityInput;