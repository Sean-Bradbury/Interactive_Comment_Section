import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Colors
import colors from '../../styles/colors';

// Components
import CardContainer from '../card/CardContainer';
import Avatar from '../avatar/Avatar';

// Context
import commentContext from '../../context/comment/commentContext';
import appContext from '../../context/app/appContext';

const FormContainer = styled.div`
  margin-bottom: 2rem;
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
  margin-bottom: 1rem;
  &:active,
  &:focus {
    outline-color: ${colors.colorPrimaryModBlue};
    outline-width: 1px;
  }
`;

const MobileBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  background-color: ${colors.colorPrimaryModBlue};
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
`;

const CommentForm = ({
  type,
  id,
  setShowReplyForm,
  setShowEditForm,
}) => {
  const [textValue, setTextValue] = useState('');
  const CommentContext = useContext(commentContext);
  const AppContext = useContext(appContext);
  const { currentUser, addComment, replyComment, editComment } =
    CommentContext;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (type === 'comment') {
      try {
        const dataObj = {
          id: uuidv4(),
          content: textValue,
          createdAt: 'Today',
          score: 0,
          user: {
            image: {
              png: currentUser.image.png,
              webp: currentUser.image.webp,
            },
            username: currentUser.username,
          },
          replies: [],
        };

        addComment(dataObj);
        setTextValue('');
        toast.success('COMMENT ADDED');
      } catch (err) {
        toast.error('COMMENT NOT ADDED');
        console.log(err);
      }
    } else if (type === 'reply') {
      try {
        const dataObj = {
          id: uuidv4(),
          content: textValue,
          createdAt: 'Today',
          score: 0,
          user: {
            image: {
              png: currentUser.image.png,
              webp: currentUser.image.webp,
            },
            username: currentUser.username,
          },
          replies: [],
        };

        replyComment(id, dataObj);
        setTextValue('');
        setShowReplyForm(false);
        toast.success('REPLY ADDED');
      } catch (err) {
        toast.error('REPLY NOT ADDED');
        console.log(err);
      }
    } else if (type === 'edit') {
      try {
        editComment(id, textValue);
        setTextValue('');
        setShowEditForm(false);
        toast.success('EDIT SAVED');
      } catch (err) {
        toast.error('EDIT DID NOT SAVE');
        console.log(err);
      }
    }
  };

  return (
    <FormContainer>
      <ToastContainer theme="light" />
      <CardContainer>
        <Form onSubmit={handleFormSubmit}>
          <TextAreaInput
            rows={4}
            cols={100}
            placeholder="Add a comment..."
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            required
          />
          <MobileBottom>
            <Avatar
              src={currentUser && currentUser.image.png}
              alt={currentUser && currentUser.username}
              className={
                AppContext.dimensions.width > 768 && 'desktop'
              }
            />
            <Button type="submit">
              {type === 'edit' ? 'EDIT' : 'SEND'}
            </Button>
          </MobileBottom>
        </Form>
      </CardContainer>
    </FormContainer>
  );
};

CommentForm.propTypes = {
  type: PropTypes.string,
  id: PropTypes.any,
};

export default CommentForm;
