import styled from 'styled-components';

export const CardWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  boxShadow: '0 0 10px 0 rgba(0,0,0,0.45)',
  margin: '10px',
  borderRadius: '15px',
  padding: '10px',
  width: '100%',
  fontFamily: 'Orbitron Regular',
  [`@media (min-width: 992px)`]: {
    width: '500px',
  },
  '&:hover': {
    boxShadow:
      '0px -25px 20px -20px rgba(0, 0, 0, 0.45), 25px 0 20px -20px rgba(0, 0, 0, 0.45), 0px 25px 20px -20px rgba(0, 0, 0, 0.45), -25px 0 20px -20px rgba(0, 0, 0, 0.45)',
    borderRadius: '25px',

    transition: 'box-shadow 500ms, border-radius 1000ms',
  },
});

export const Heading = styled.h2({
  textAlign: 'center',
  textShadow: '1px 1px #8e8e8e',
  borderBottom: '1px solid lightgrey',
  width: '100%',
  paddingBottom: '20px',
});

export const ImageWrapper = styled.div({
  margin: '0 auto',
});
