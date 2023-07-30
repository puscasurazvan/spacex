import styled from 'styled-components';

export const List = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  '>*': {
    marginTop: '5px',
  },
  overfloWrap: 'break-word',
  wordWrap: 'break-word',
});

export const Item = styled.li({
  fontWeight: 'bolder',
});

export const Span = styled.span({
  fontWeight: 'bolder',
  color: '#8e8e8e',
});
