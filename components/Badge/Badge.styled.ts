import styled from 'styled-components';

export const Badge = styled.h3(({ color }) => ({
  width: 'fit-content',
  padding: '5px',
  borderRadius: '5px',
  fontWeight: 'bold',
  textShadow: `0.3px 0.3px ${color}`,
  color: '#fff',
  backgroundColor: color,
  margin: '10px auto',
}));
