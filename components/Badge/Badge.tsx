import * as Styled from './Badge.styled';

type BadgeProps = {
  launchStatus: string;
};

export const Badge = ({ launchStatus }: BadgeProps) => (
  <Styled.Badge color={launchStatus === 'Success' ? 'green' : 'red'} data-testid="badge">
    {launchStatus}
  </Styled.Badge>
);
