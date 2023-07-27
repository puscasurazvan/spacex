import { AppProps } from 'next/app';

import { GlobalStyle } from '../styles';

import { fetchData } from '../utils/fetchData';
import { formatDate } from '../utils/formatDate';
import { Card } from '../components/Card';
import { Wrapper } from '../components/Wrapper';
import { v4 as uuid } from 'uuid';

function MyApp({ Component, pageProps }: AppProps) {
  const { data, isLoading, error } = fetchData('/launches/query');

  if (isLoading) return 'Loading...';
  if (error) throw new Error(error);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {data?.docs?.map((launch: any) => (
          <Card
            key={uuid()}
            imageSrc={launch?.links.patch.small}
            status={launch?.success === true ? 'Success' : 'Failure'}
            name={launch?.name}
            date={`${formatDate(launch?.date_utc)}`}
            core={launch?.cores[0]?.core}
            payloadType={launch?.payloads[0].id}
            payloadId={launch?.payloads[0].type}
            failureReason={launch?.failures[0]?.reason}
          />
        ))}
      </Wrapper>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
