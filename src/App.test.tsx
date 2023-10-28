import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing'; // Import MockedProvider
import App from './App';
import {
  GET_USER_REPOSITORIES,
  mockGetUserInfoResponse,
} from './graphql/queries';


 // The mock response data
test('renders user repositories', async () => {
  const mocks = [
    {
      request: {
        query: GET_USER_REPOSITORIES,
        variables: { username: 'user123' },
      },
      result: mockGetUserInfoResponse,
    },
  ];

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
});
