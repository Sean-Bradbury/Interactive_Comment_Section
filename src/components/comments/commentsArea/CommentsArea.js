import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  padding: 1rem;
  margin: auto;
`;

const CommentsArea = (props) => {
  return <Container>{props.children}</Container>;
};

export default CommentsArea;
