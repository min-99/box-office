'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import DaliyBoxOfficeList from './_components/DaliyBoxOfficeList';

interface DailyBoxOfficePageProps {}

// Create a client
const queryClient = new QueryClient();

const DailyBoxOfficePage = (props: DailyBoxOfficePageProps) => {
  return (
    <div>
      <h1>테스트</h1>
      <QueryClientProvider client={queryClient}>
        <DaliyBoxOfficeList />
      </QueryClientProvider>
    </div>
  );
};

export default DailyBoxOfficePage;
