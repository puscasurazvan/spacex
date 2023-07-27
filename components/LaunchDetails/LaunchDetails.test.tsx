import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LaunchDetails } from './LaunchDetails';

describe('LaunchDetails Component', () => {
  it('renders the LaunchDetails component with all details', () => {
    const launchDate = '2023-07-27';
    const core = 'Falcon 9';
    const payloadType = 'Satellite';
    const payloadId = 'ABCD1234';
    const failureReason = 'Engine anomaly detected';

    const { container, getByTestId } = render(
      <LaunchDetails
        launchDate={launchDate}
        core={core}
        payloadType={payloadType}
        payloadId={payloadId}
        failureReason={failureReason}
      />
    );
    const dateElement = getByTestId('date');
    const coreElement = getByTestId('core');
    const payloadIdElement = getByTestId('payloadId');
    const payloadTypeElement = getByTestId('payloadType');
    const failureReasonElement = getByTestId('failureReason');

    expect(container).toMatchSnapshot();

    expect(dateElement).toBeInTheDocument();
    expect(coreElement).toBeInTheDocument();
    expect(payloadIdElement).toBeInTheDocument();
    expect(payloadTypeElement).toBeInTheDocument();
    expect(failureReasonElement).toBeInTheDocument();
  });

  it('renders the LaunchDetails component without failure reason', () => {
    const launchDate = '2023-07-27';
    const core = 'Falcon 9';
    const payloadType = 'Satellite';
    const payloadId = 'ABCD1234';
    const failureReason = '';

    const { container, getByTestId } = render(
      <LaunchDetails
        launchDate={launchDate}
        core={core}
        payloadType={payloadType}
        payloadId={payloadId}
        failureReason={failureReason}
      />
    );
    const dateElement = getByTestId('date');
    const coreElement = getByTestId('core');
    const payloadIdElement = getByTestId('payloadId');
    const payloadTypeElement = getByTestId('payloadType');

    expect(container).toMatchSnapshot();
    expect(dateElement).toBeInTheDocument();
    expect(coreElement).toBeInTheDocument();
    expect(payloadIdElement).toBeInTheDocument();
    expect(payloadTypeElement).toBeInTheDocument();
  });
});
