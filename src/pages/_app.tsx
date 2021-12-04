import type { AppProps } from 'next/app';

import '@styles/main.scss';
import { QueryClientProvider } from 'react-query';
import Layout from '@shared/components/Layout';
import queryClient from '@services/queryClient';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
