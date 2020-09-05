// @flow
import React from 'react';
import { gql } from '@apollo/client';

import TemperatureInfos, { fragments as TemperatureInfosFragments } from './TemperatureInfos';
import WindInfos, { fragments as WindInfosFragments } from './WindInfos';

type Props = {
  weather: {
    temperature: any,
  },
};

const CityWeather = ({ weather }: Props) => {
  return (
    <>
      <TemperatureInfos temperature={weather.temperature} />
      <WindInfos wind={weather.wind} />
    </>
  );
}

export default CityWeather;

export const fragments = {
  weather: {
    name: 'CityWeather_Weather',
    gql: gql`
      fragment CityWeather_Weather on Weather {
        temperature {
          ...${TemperatureInfosFragments.temperature.name}
        }
        wind {
          ...${WindInfosFragments.wind.name}
        }
      }
      ${TemperatureInfosFragments.temperature.gql}
      ${WindInfosFragments.wind.gql}
    `,
  }
}
