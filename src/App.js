import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';

import apolloClient from './clients/api'

import useDebounce from './utils/useDebounce';

import SearchCityInput from './components/SearchCityInput';
import WetherResult from './components/WetherResult';

const App = () => {
  const [city, setCity] = useState('');

  const cityName = useDebounce(city, 300);

  return (
    <ApolloProvider client={apolloClient}>
      <SearchCityInput value={city} onChange={setCity} />
      <WetherResult cityName={cityName} />
    </ApolloProvider>
  );
}

export default App;
