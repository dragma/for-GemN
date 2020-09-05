// @flow
import React from 'react';
import { gql } from '@apollo/client'

import CityWeather, { fragments as CityWeatherFragments } from './CityWeather';

type Props = {
  city: {
    weather: any
  }
}

const CityInfos = ({ city }: Props) => {
  return (
    <div>
      <h1>{`Weather at ${city.name}`}</h1>
      <CityWeather weather={city.weather} />
    </div>
  )
}

export default CityInfos;

export const fragments = {
  city: {
    name: 'CityInfos_City',
    gql: gql`
      fragment CityInfos_City on City {
        id
        name
        weather {
          ...${CityWeatherFragments.weather.name}
        }
      }
      ${CityWeatherFragments.weather.gql}
    `,
  }
}