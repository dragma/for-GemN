import { gql } from '@apollo/client';

import { fragments as CityInfosFragments } from './CityInfos';

export const GET_CITY_WEATHER = gql`
  query GetCityName($city: String!) {
    getCityByName(name: $city, country: "FR") {
      id
      ...${CityInfosFragments.city.name}
    }
  }

  ${CityInfosFragments.city.gql}
`;