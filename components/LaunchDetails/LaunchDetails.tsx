import * as Styled from './LaunchDetails.styled';
import { v4 as uuid } from 'uuid';

type LaunchDetailsProps = {
  launchDate: string;
  core: string;
  payloadType: string;
  payloadId: string;
  failureReason: string;
};

export const LaunchDetails = ({ launchDate, core, payloadType, payloadId, failureReason }: LaunchDetailsProps) => {
  const launchDetails = [
    {
      testId: 'date',
      spanText: 'DATE:',
      value: launchDate,
    },
    {
      testId: 'core',
      spanText: 'CORE:',
      value: core,
    },
    {
      testId: 'payloadType',
      spanText: 'PAYLOAD TYPE:',
      value: payloadType,
    },
    {
      testId: 'payloadId',
      spanText: 'PAYLOAD ID:',
      value: payloadId,
    },
  ];

  return (
    <Styled.List>
      {launchDetails.map(({ testId, spanText, value }) => (
        <Styled.Item data-testid={testId} key={uuid()}>
          <Styled.Span>{spanText}</Styled.Span> {value}
        </Styled.Item>
      ))}

      {failureReason && (
        <Styled.Item data-testid="failureReason">
          <Styled.Span>FAILURE REASON:</Styled.Span> {failureReason}
        </Styled.Item>
      )}
    </Styled.List>
  );
};
