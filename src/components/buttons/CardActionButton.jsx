import { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//Colors
import colors from '../../styles/colors';

// Images 
import DeleteImage from '../../images/icon-delete.svg';
import EditImage from '../../images/icon-edit.svg';
import ReplyImage from '../../images/icon-reply.svg';

//Context
import commentContext from '../../context/comment/commentContext';

const Container = styled.div`
    display: inline-flex;
    align-items: center;
    margin-left: 1rem;
    &:hover {
        filter: brightness(80%);
        cursor: pointer;
    }
    &:active,
    &:focus {
        opacity: 0.5;
    }
`;

const ActionImage = styled.img`
    height: 15px;
`;

const TypeText = styled.span`
    color: ${colors.colorPrimaryModBlue};
    font-weight: 500;
    padding-left: 0.75rem;
    text-transform: capitalize;
    &.delete {
        color: ${colors.colorPrimarySoftRed}
    }
`;


const CardActionButton = ({type, id, cardType}) => {
    const CommentContext = useContext(commentContext);

    const handleAction = (type) => {
        if(type === 'delete'){
            if(cardType === 'comment'){
                //CommentContext.deleteComment(id);
                CommentContext.showModal(true);
            } else if (cardType === 'reply') {
                //CommentContext.deleteReply(id);
                CommentContext.showModal(true);
            }
        }
    };

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
    <Container onClick={() => handleAction(type)}>
      <ActionImage src={switchImage(type)} alt={type} />
      <TypeText className={type} >{type}</TypeText>
    </Container>
  )
};

CardActionButton.propTypes = {
    type: PropTypes.string.isRequired,
};

export default CardActionButton;
