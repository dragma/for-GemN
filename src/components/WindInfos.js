// @flow
import React from 'react';
import { gql } from '@apollo/client';

type Props = {
  wind: {
    actual: Float,
    min: Float,
    max: Float,
  },
};

const WindInfos = ({ wind }: Props) => (
  <div>
    <h2>Wind</h2>
    <dl>
      <dt>Speed</dt>
      <dd>{`${wind.speed} m/s`}</dd>
      <dt>Direction</dt>
      <dd>{wind.deg}°</dd>
    </dl>
  </div>
);

export default WindInfos;

export const fragments = {
  wind: {
    name: 'WindInfos_wind',
    gql: gql`
      fragment WindInfos_wind on Wind {
        speed
        deg
      }
    `,
  },
};
