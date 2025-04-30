
import React from 'react';
import { StackWrapper } from './src/ScreenNavigator/stackWrapper';
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <>
     <QueryClientProvider client={queryClient}>
      <StackWrapper children = {undefined} />
    </QueryClientProvider>
    </>
   
  );
};

export default App;


