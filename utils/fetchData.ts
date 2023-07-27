import useSWR, { SWRConfiguration } from 'swr';

const API_BASE_URL = 'https://api.spacexdata.com/v5';

const fetcher = async (url: string, options?: SWRConfiguration): Promise<any> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Network issues');
  }
  return response.json();
};

export const fetchData = (endpoint: string, options?: SWRConfiguration) => {
  const url = `${API_BASE_URL}${endpoint}`;

  // Prepopulate API data with query config and retrieve only the fields we need
  // https://github.com/r-spacex/SpaceX-API/blob/master/docs/queries.md
  const fetchOptions: SWRConfiguration = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {},
      options: {
        select: {
          name: 1,
          date_utc: 1,
          links: 1,
          success: 1,
          cores: 1,
          payloads: 1,
          failures: 1,
        },
        populate: [
          {
            path: 'payloads',
            select: {
              name: 1,
              type: 1,
            },
          },
        ],
      },
    }),
    ...options,
  };

  const { data, error, isLoading } = useSWR(url, (url) => fetcher(url, fetchOptions));

  return {
    data,
    isLoading,
    error,
  };
};
