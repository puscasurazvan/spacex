import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional DOM matchers
import { LaunchDetails } from './LaunchDetails'; // Replace './LaunchDetails' with the correct path to your LaunchDetails component

describe('LaunchDetails Component', () => {
  it('renders the LaunchDetails component with all details', () => {
    const launchDate = '2023-07-27';
    const core = 'Falcon 9';
    const payloadType = 'Satellite';
    const payloadId = 'ABCD1234';
    const failureReason = 'Engine anomaly detected';

    const { container } = render(
      <LaunchDetails
        launchDate={launchDate}
        core={core}
        payloadType={payloadType}
        payloadId={payloadId}
        failureReason={failureReason}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders the LaunchDetails component without failure reason', () => {
    const launchDate = '2023-07-27';
    const core = 'Falcon 9';
    const payloadType = 'Satellite';
    const payloadId = 'ABCD1234';
    const failureReason = '';

    const { container } = render(
      <LaunchDetails
        launchDate={launchDate}
        core={core}
        payloadType={payloadType}
        payloadId={payloadId}
        failureReason={failureReason}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
