import { useState, useEffect, useContext, Fragment } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

//Colors
import colors from '../../../styles/colors';

//Components
import CardContainer from '../../card/CardContainer';
import LikeButton from '../../buttons/likeButton/LikeButton';
import ActionButton from '../../buttons/CardActionButton';

//Context
import commentContext from '../../../context/comment/commentContext';

import AmyRobinson from '../../../images/avatars/image-amyrobson.png';

// For like button


const ContentDesktop = styled.div`
    display: flex;
`;

const ContentMobile = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentLeft = styled.div`

`;

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

const Avatar = styled.img`
    height: 30px;
    width: 30px;
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
    color: ${colors.colorNeutralGrayBlue}
`;

const CommentArea = styled.p`
    color: ${colors.colorNeutralGrayBlue};
    text-align: left;
    line-height: 25px;
    padding-bottom: 1rem;
`;

const ActionButtonContainer = styled.div`
    justify-self: end;
`;

//Components

const CommentCard = ({data}) => {
    const CommentContext = useContext(commentContext);
    const { activeUser } = CommentContext;

    const { content, createdAt, score, user, id, replies } = data;
    const { image, username } = user;

    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        
        window.addEventListener('resize', () => {
            handleResize();
        });
    }, [setDimensions]);


    if(dimensions.width > 768){
        return (
          <CardContainer>
              <ContentDesktop>
                  <ContentLeft>
                    <LikeButton className='desktop' score={score} id={id} />
                  </ContentLeft>
                  <ContentRight>  
                    <InfoArea>
                        <UserInfo>
                            <Avatar src={image.png} alt={username} height="30" width="30" />
                            <UserName>{username}</UserName>
                            {username === activeUser && <Label>you</Label>}
                            <Date>{createdAt}</Date>
                        </UserInfo>  
                        {username === activeUser ? (
                            <ActionButtonContainer>
                                <ActionButton type='edit' />
                                <ActionButton type='delete' />
                            </ActionButtonContainer>
                            ) : (
                            <ActionButton type='reply' />
                        )}
                    </InfoArea>        
                    <CommentArea>
                        {content}
                    </CommentArea>
                  </ContentRight>
              </ContentDesktop>
          </CardContainer>
        )
    } else {
        return (
            <CardContainer>
                <ContentMobile>
                    <Fragment>   
                        <InfoArea>
                            <UserInfo>
                                <Avatar src={image.png} alt={username} height="30" width="30" />
                                <UserName>{username}</UserName>
                                {username === activeUser && <Label>you</Label>} 
                                <Date>{createdAt}</Date>
                            </UserInfo>         
                        </InfoArea>
                      <CommentArea>
                          {content}
                      </CommentArea>
                    </Fragment>
                    <ContentBottom>
                      <LikeButton className='mobile' score={score} />
                      {username === activeUser ? (
                            <ActionButtonContainer>
                                <ActionButton type='edit' />
                                <ActionButton type='delete' />
                            </ActionButtonContainer>
                            ) : (
                            <ActionButton type='reply' />
                        )}
                    </ContentBottom>
                </ContentMobile>
            </CardContainer>
          )
    }
}

CommentCard.propTypes = {
    data: PropTypes.object.isRequired,
}

export default CommentCard
