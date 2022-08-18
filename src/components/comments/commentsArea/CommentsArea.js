import { useContext, useEffect, Fragment } from 'react';
import styled from 'styled-components';

//Colors
import colors from '../../../styles/colors';

//Components
import CommentCard from '../commentCard/CommentCard';
import DeleteModal from '../../modal/DeleteModal';

//Context
import commentContext from '../../../context/comment/commentContext';

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
  div:last-child {
    margin-bottom: 0;
  }
`;

const CommentsArea = (props) => {
  const CommentContext = useContext(commentContext);

  const { loadComments, comments } = CommentContext;

  useEffect(() => {
    loadComments();
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
                  <Indent>
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
      </Container>
      <DeleteModal />
    </Fragment>
  );
};

export default CommentsArea;
