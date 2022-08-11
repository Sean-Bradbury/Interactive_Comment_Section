import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background-color: #fff;
    border-radius: 10px;
    justify-self: stretch;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;
`;

const CardContainer = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default CardContainer
