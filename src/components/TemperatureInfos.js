// @flow
import React from 'react';
import { gql } from '@apollo/client';

type Props = {
  temperature: {
    actual: Float,
    min: Float,
    max: Float,
  },
};

const TemperatureInfos = ({ temperature }: Props) => {
  return (
    <div>
      <h2>Temperature</h2>
      <dl>
        <dt>Actual</dt>
        <dd>{temperature.actual}°K</dd>
        <dd>{Math.floor((temperature.actual - 273.15) * 100) / 100}°C</dd>
        <dt>Max</dt>
        <dd>{temperature.max}°K</dd>
        <dd>{Math.floor((temperature.max - 273.15) * 100) / 100}°C</dd>
        <dt>Min</dt>
        <dd>{temperature.min}°K</dd>
        <dd>{Math.floor((temperature.min - 273.15) * 100) / 100}°C</dd>
      </dl>
    </div>
  );
}

export default TemperatureInfos;


export const fragments = {
  temperature: {
    name: 'TemperatureInfos_temperature',
    gql: gql`
      fragment TemperatureInfos_temperature on Temperature {
        actual
        max
        min
      }
    `,
  }
}
