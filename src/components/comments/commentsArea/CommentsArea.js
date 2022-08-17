import { useContext, useEffect, Fragment } from 'react';
import styled from 'styled-components';

//Colors
import colors from '../../../styles/colors';

//Components
import CommentCard from '../commentCard/CommentCard';

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
`;

const CommentsArea = (props) => {
  const CommentContext = useContext(commentContext);

  const { loadComments, data } = CommentContext;

  const { comments } = data;

  useEffect(() => {
    loadComments();
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      {comments &&
        comments.map((comment) => {
          const { replies } = comment;
          if (replies.length <= 0) {
            return <CommentCard key={comment.id} data={comment} />;
          } else {
            return (
              <Fragment key={comment.id}>
                <CommentCard data={comment} />
                <Indent>
                  {replies.map((reply) => {
                    return (
                      <CommentCard key={reply.id} data={reply} />
                    );
                  })}
                </Indent>
              </Fragment>
            );
          }
        })}
    </Container>
  );
};

export default CommentsArea;
