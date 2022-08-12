import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//Colors
import colors from '../../styles/colors';

// Images 
import DeleteImage from '../../images/icon-delete.svg';
import EditImage from '../../images/icon-edit.svg';
import ReplyImage from '../../images/icon-reply.svg';

const Container = styled.div`
    display: inline-flex;
    align-items: center;
`;

const ActionImage = styled.img`
    height: 15px;
`;

const TypeText = styled.span`
    color: ${colors.colorPrimaryModBlue};
    font-weight: 500;
    padding-left: 0.75rem;
    text-transform: capitalize;
`;

const CardActionButton = ({type}) => {
    const switchImage = (imageType) => {
        switch(imageType){
            case 'reply':
                return(
                    ReplyImage
                );
            case 'edit':
                return(
                    EditImage
                );
            case 'delete':
                return(
                    DeleteImage
                );
            default:
                return null
        }
    }

  return (
    <Container>
      <ActionImage src={switchImage(type)} alt={type} />
      <TypeText>{type}</TypeText>
    </Container>
  )
};

CardActionButton.propTypes = {
    type: PropTypes.string.isRequired,
};

export default CardActionButton;
