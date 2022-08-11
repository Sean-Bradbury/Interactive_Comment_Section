import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

//Colors
import colors from '../../../styles/colors';

//Components
import CardContainer from '../../card/CardContainer';
import LikeButton from '../../buttons/LikeButton';

import AmyRobinson from '../../../images/avatars/image-amyrobson.png';

// For like button


const Content = styled.div`
    display: flex;
`;

const ContentLeft = styled.div`

`;

const ContentRight = styled.div`
    margin-left: 1rem;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
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
`;

//Components

const CommentCard = ({data}) => {
    const { id, content, createdAt, score, user, replies } = data;
    const { image, username } = user;

    const desktop = true;

    if(desktop){
        return (
          <CardContainer>
              <Content>
                  <ContentLeft>
                    <LikeButton className='desktop' score={score} />
                  </ContentLeft>
                  <ContentRight>   
                    <UserInfo>
                        <Avatar src={AmyRobinson} alt={username} height="30" width="30" />
                        <UserName>{username}</UserName>
                        <Date>{createdAt}</Date>
                    </UserInfo>         
                    <CommentArea>
                        {content}
                    </CommentArea>
                  </ContentRight>
              </Content>
          </CardContainer>
        )
    }
}

CommentCard.propTypes = {
    data: PropTypes.object.isRequired,
}

export default CommentCard
