import { useContext } from 'react';
import styled from 'styled-components';

// Colors
import colors from '../../styles/colors';

// Components
import CardContainer from '../card/CardContainer';
import Avatar from '../avatar/Avatar';

// Context
import commentContext from '../../context/comment/commentContext';
import appContext from '../../context/app/appContext';

const FormContainer = styled.div`
  div:first-child {
    margin: 0;
  }
`;

const Form = styled.form``;

const TextAreaInput = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-color: ${colors.colorNeutrallLghtGray};
  border-radius: 5px;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  &:active,
  &:focus {
    outline-color: ${colors.colorPrimaryModBlue};
    outline-width: 1px;
  }
`;

const Button = styled.button``;

const CommentForm = () => {
  const CommentContext = useContext(commentContext);
  const AppContext = useContext(appContext);
  const { currentUser } = CommentContext;
  return (
    <FormContainer>
      <CardContainer>
        <Form>
          <TextAreaInput
            rows={4}
            cols={100}
            placeholder="Add a comment..."
          />
          <Avatar
            src={currentUser && currentUser.image.png}
            alt={currentUser && currentUser.username}
            className={AppContext.dimensions.width > 768 && 'desktop'}
          />
          <Button type="submit">SEND</Button>
        </Form>
      </CardContainer>
    </FormContainer>
  );
};

export default CommentForm;
