import * as Styled from './Card.styled';

import Image from 'next/image';

import { Badge } from '../Badge';
import { LaunchDetails } from '../LaunchDetails';

type CardProps = {
  imageSrc: string;
  status: string;
  name: string;
  date: string;
  core: string;
  payloadType: string;
  payloadId: string;
  failureReason: string;
};

export const Card = ({ imageSrc, status, name, date, core, payloadType, payloadId, failureReason }: CardProps) => {
  return (
    <Styled.CardWrapper>
      <Styled.Heading data-testid="heading">
        {name} {status === 'Success' ? '🚀' : '💥'}
      </Styled.Heading>

      <Styled.ImageWrapper>
        <Image src={imageSrc} width="100" height="100" alt="SpaceX Image" />
      </Styled.ImageWrapper>
      <Badge launchStatus={status} />

      <LaunchDetails
        launchDate={date}
        core={core}
        payloadType={payloadType}
        payloadId={payloadId}
        failureReason={failureReason}
      />
    </Styled.CardWrapper>
  );
};
