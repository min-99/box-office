import queryString from 'query-string';
import {
  DaliyBoxOfficeRequest,
  DaliyBoxOfficeResponse,
} from '../_dto/DaliyBoxOffice';

export const GetDailyBoxOfficeGateway = (
  request: DaliyBoxOfficeRequest,
): Promise<DaliyBoxOfficeResponse> => {
  const query = queryString.stringify(request);
  return fetch(
    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?${query}`,
  )
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error));
};
