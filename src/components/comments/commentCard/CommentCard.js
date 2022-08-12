import { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

//Colors
import colors from '../../../styles/colors';

//Components
import CardContainer from '../../card/CardContainer';
import LikeButton from '../../buttons/LikeButton';
import ActionButton from '../../buttons/CardActionButton';

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

const Date = styled.span`
    color: ${colors.colorNeutralGrayBlue}
`;

const CommentArea = styled.p`
    color: ${colors.colorNeutralGrayBlue};
    text-align: left;
    line-height: 25px;
    padding-bottom: 1rem;
`;

//Components

const CommentCard = ({data}) => {
    const { id, content, createdAt, score, user, replies } = data;
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
                    <LikeButton className='desktop' score={score} />
                  </ContentLeft>
                  <ContentRight>  
                    <InfoArea>
                        <UserInfo>
                            <Avatar src={AmyRobinson} alt={username} height="30" width="30" />
                            <UserName>{username}</UserName>
                            <Date>{createdAt}</Date>
                        </UserInfo>  
                        <ActionButton type='reply' />
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
                                <Avatar src={AmyRobinson} alt={username} height="30" width="30" />
                                <UserName>{username}</UserName>
                                <Date>{createdAt}</Date>
                            </UserInfo>         
                        </InfoArea>
                      <CommentArea>
                          {content}
                      </CommentArea>
                    </Fragment>
                    <ContentBottom>
                      <LikeButton className='mobile' score={score} />
                      <ActionButton type='reply' />
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
