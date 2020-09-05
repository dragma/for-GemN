// @flow
import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_CITY_WEATHER } from './SearchCity.queries';
import CityInfos from './CityInfos';

type Props = {
  cityName: String,
};

const WetherResult = ({ cityName }: Props) => {

  const { data, loading, error } = useQuery(GET_CITY_WEATHER, {
    variables: { city: cityName }, 
    skip: !cityName,
  });

  if (!cityName) {
    return null;
  }
  if (loading) {
    return <span>Loading...</span>
  }
  if (error) {
    return (<span>Error !</span>)
  }
  if (data.getCityByName) {
    return (<CityInfos city={data.getCityByName} />)
  }

  return (<span>{`${cityName} is no a valid french city name`}</span>)
};

export default WetherResult;