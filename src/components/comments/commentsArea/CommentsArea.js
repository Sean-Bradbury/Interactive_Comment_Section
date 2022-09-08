import { useContext, useEffect, Fragment } from 'react';
import styled from 'styled-components';

//Colors
import colors from '../../../styles/colors';

//Components
import CommentCard from '../commentCard/CommentCard';
import DeleteModal from '../../modal/DeleteModal';
import CommentForm from '../../form/CommentForm';

//Context
import commentContext from '../../../context/comment/commentContext';
import appContext from '../../../context/app/appContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  padding: 1rem;
  margin: auto;
`;

const Indent = styled.div`
  margin-left: 50px;
  padding-left: 50px;
  border-left: 2px solid ${colors.colorNeutrallLghtGray};
  margin-bottom: 2rem;
  &.mobile {
    margin-left: 25px;
    padding-left: 25px;
  }
  div:last-child {
    margin-bottom: 0;
  }
`;

const CommentsArea = (props) => {
  const CommentContext = useContext(commentContext);
  const AppContext = useContext(appContext);
  const { setDimensions, dimensions } = AppContext;

  const { loadComments, comments } = CommentContext;
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    loadComments();

    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });

    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', () => {
      handleResize();
    });
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Container>
        {comments &&
          comments.map((comment) => {
            const { replies } = comment;
            if (replies.length <= 0) {
              return (
                <CommentCard
                  key={comment.id}
                  data={comment}
                  cardType="comment"
                />
              );
            } else {
              return (
                <Fragment key={comment.id}>
                  <CommentCard data={comment} cardType="comment" />
                  <Indent
                    className={dimensions.width < 768 && 'mobile'}
                  >
                    {replies.map((reply) => {
                      return (
                        <CommentCard
                          key={reply.id}
                          data={reply}
                          cardType="reply"
                        />
                      );
                    })}
                  </Indent>
                </Fragment>
              );
            }
          })}
        <CommentForm type="comment" />
      </Container>
      <DeleteModal />
    </Fragment>
  );
};

export default CommentsArea;
