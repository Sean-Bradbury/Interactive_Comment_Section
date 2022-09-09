import { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import commentContext from '../../context/comment/commentContext';
import { ToastContainer, toast } from 'react-toastify';

//Components
import CardContainer from '../card/CardContainer';

//Colors
import colors from '../../styles/colors';

const ModalWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const fade = keyframes`${fadeIn}`;

const ModalContainer = styled.div`
  width: 400px;
  animation: 1s ${fade};
`;

const Content = styled.div`
  text-align: left;
  color: ${colors.colorNeutralGrayBlue};
`;

const Title = styled.h2`
  font-size: 1.4rem;
  color: ${colors.colorNeutralDarkBlue};
  margin-bottom: 1rem;
`;

const Text = styled.p`
  margin-bottom: 1rem;
`;

const Button = styled.div`
  display: inline-flex;
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  color: #fff;
  cursor: pointer;
  background-color: ${colors.colorNeutralGrayBlue};
  &.delete {
    background-color: ${colors.colorPrimarySoftRed};
    margin-left: 1rem;
  }
`;

const DeleteModal = () => {
  const CommentContext = useContext(commentContext);
  const { deleteComment, showModal, modal, currentCommentID } =
    CommentContext;

  const handleShowModal = (action) => {
    if (action === 'cancel') {
      showModal(false);
    } else if (action === 'delete') {
      deleteComment(currentCommentID);
      toast.success('COMMMENT DELETED');
      showModal(false);
    }
  };

  return (
    modal && (
      <ModalWrapper>
        <ToastContainer theme="light" />
        <ModalContainer>
          <CardContainer>
            <Content>
              <Title>Delete Comment</Title>
              <Text>
                Are you sure you want to delete this comment? This
                will remove the comment and can't be undone.
              </Text>
              <Button onClick={() => handleShowModal('cancel')}>
                NO, CANCEL
              </Button>
              <Button
                className="delete"
                onClick={() => handleShowModal('delete')}
              >
                YES, DELETE
              </Button>
            </Content>
          </CardContainer>
        </ModalContainer>
      </ModalWrapper>
    )
  );
};

export default DeleteModal;
