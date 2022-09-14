import { useState, useContext, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//Colors
import colors from '../../../styles/colors';

//Components
import CardContainer from '../../card/CardContainer';
import LikeButton from '../../buttons/likeButton/LikeButton';
import ActionButton from '../../buttons/CardActionButton';
import Avatar from '../../avatar/Avatar';

//Context
import commentContext from '../../../context/comment/commentContext';
import appContext from '../../../context/app/appContext';
import CommentForm from '../../form/CommentForm';

// For like button

const ContentDesktop = styled.div`
  display: flex;
`;

const ContentMobile = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentLeft = styled.div``;

const ContentRight = styled.div`
  margin-left: 1rem;
`;

const ContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const InfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`;

const UserName = styled.span`
  font-weight: 500;
  padding: 0 0.75rem;
`;

const Label = styled.span`
  background-color: ${colors.colorPrimaryModBlue};
  color: #fff;
  padding: 0.2rem 0.5rem;
  margin-right: 1rem;
  border-radius: 5px;
  font-size: 12px;
`;

const Date = styled.span`
  color: ${colors.colorNeutralGrayBlue};
`;

const CommentArea = styled.p`
  color: ${colors.colorNeutralGrayBlue};
  text-align: left;
  line-height: 25px;
  padding-bottom: 1rem;
  display: flex;
  width: 100%:
`;

const ActionButtonContainer = styled.div`
  position: absolute;
  right: 1rem;
  &.mobile {
    bottom: 1rem;
  }
`;

//Components

const CommentCard = ({ data }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const CommentContext = useContext(commentContext);
  const AppContext = useContext(appContext);
  const { dimensions } = AppContext;

  const { currentUser } = CommentContext;

  const { content, createdAt, score, user, id } = data;
  const { image, username } = user;

  if (dimensions.width > 768) {
    return (
      <Fragment>
        <CardContainer>
          <ContentDesktop>
            <ContentLeft>
              <LikeButton className="desktop" score={score} id={id} />
            </ContentLeft>
            <ContentRight>
              <InfoArea>
                <UserInfo>
                  <Avatar src={image.png} alt={username} />
                  <UserName>{username}</UserName>
                  {username === currentUser.username && (
                    <Label>you</Label>
                  )}
                  <Date>{createdAt}</Date>
                </UserInfo>
                {username === currentUser.username ? (
                  <ActionButtonContainer>
                    <ActionButton type="delete" id={id} />
                    {showEditForm ? (
                      <ActionButton
                        type="cancel edit"
                        id={id}
                        setShowEditForm={setShowEditForm}
                      />
                    ) : (
                      <ActionButton
                        type="edit"
                        id={id}
                        setShowEditForm={setShowEditForm}
                      />
                    )}
                  </ActionButtonContainer>
                ) : (
                  <ActionButton
                    type="reply"
                    id={id}
                    setShowReplyForm={setShowReplyForm}
                  />
                )}
              </InfoArea>
              {showEditForm ? (
                <CommentForm
                  type="edit"
                  id={id}
                  setShowEditForm={setShowEditForm}
                  commentContent={content}
                />
              ) : (
                <CommentArea>{content}</CommentArea>
              )}
            </ContentRight>
          </ContentDesktop>
        </CardContainer>
        {showReplyForm && (
          <CommentForm
            type="reply"
            id={id}
            setShowReplyForm={setShowReplyForm}
          />
        )}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <CardContainer>
          <ContentMobile>
            <Fragment>
              <InfoArea>
                <UserInfo>
                  <Avatar src={image.png} alt={username} />
                  <UserName>{username}</UserName>
                  {username === currentUser.username && (
                    <Label>you</Label>
                  )}
                  <Date>{createdAt}</Date>
                </UserInfo>
              </InfoArea>
              {showEditForm ? (
                <CommentForm
                  type="edit"
                  id={id}
                  setShowEditForm={setShowEditForm}
                  commentContent={content}
                />
              ) : (
                <CommentArea>{content}</CommentArea>
              )}
            </Fragment>
            <ContentBottom>
              <LikeButton className="mobile" score={score} id={id} />
              {username === currentUser.username ? (
                <ActionButtonContainer>
                  <ActionButton type="delete" id={id} />
                  {showEditForm ? (
                    <ActionButton
                      type="cancel edit"
                      id={id}
                      setShowEditForm={setShowEditForm}
                    />
                  ) : (
                    <ActionButton
                      type="edit"
                      id={id}
                      setShowEditForm={setShowEditForm}
                    />
                  )}
                </ActionButtonContainer>
              ) : (
                <ActionButton
                  type="reply"
                  id={id}
                  setShowReplyForm={setShowReplyForm}
                />
              )}
            </ContentBottom>
          </ContentMobile>
        </CardContainer>
        {showReplyForm && (
          <CommentForm
            type="reply"
            id={id}
            setShowReplyForm={setShowReplyForm}
          />
        )}
      </Fragment>
    );
  }
};

CommentCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CommentCard;
