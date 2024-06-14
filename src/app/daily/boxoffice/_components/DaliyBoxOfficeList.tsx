'use client';

import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { GetDailyBoxOfficeGateway } from '../_api';

interface DaliyBoxOfficeListProps {}

const DaliyBoxOfficeList = (props: DaliyBoxOfficeListProps) => {
  // Access the client
  const queryClient = useQueryClient();

  const targetDt = '20240612';

  // Queries
  const { error, data } = useQuery({
    queryKey: [`daliyBoxOfficeList${targetDt}`],
    queryFn: () => GetDailyBoxOfficeGateway({ key: 'value', targetDt }),
  });

  console.log('data', data);

  if (error) return <>Error</>;

  return <>렌더링</>;
};

export default DaliyBoxOfficeList;
