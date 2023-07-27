import { ReactNode } from 'react';

import * as Styled from './Wrapper.styled';

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return <Styled.Container data-testid="card-wrapper">{children}</Styled.Container>;
};
