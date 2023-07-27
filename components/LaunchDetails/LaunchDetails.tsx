import * as Styled from './LaunchDetails.styled';

type LaunchDetailsProps = {
  launchDate: string;
  core: string;
  payloadType: string;
  payloadId: string;
  failureReason: string;
};

export const LaunchDetails = ({ launchDate, core, payloadType, payloadId, failureReason }: LaunchDetailsProps) => {
  return (
    <Styled.List>
      <Styled.Item>
        <Styled.Span>DATE:</Styled.Span> {launchDate}
      </Styled.Item>
      <Styled.Item>
        <Styled.Span>CORE:</Styled.Span> {core}
      </Styled.Item>
      <Styled.Item>
        <Styled.Span>PAYLOAD ID:</Styled.Span> {payloadId}
      </Styled.Item>
      <Styled.Item>
        <Styled.Span>PAYLOAD TYPE:</Styled.Span> {payloadType}
      </Styled.Item>
      {failureReason && (
        <Styled.Item>
          <Styled.Span>FAILURE REASON:</Styled.Span> {failureReason}
        </Styled.Item>
      )}
    </Styled.List>
  );
};
