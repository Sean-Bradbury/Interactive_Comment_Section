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


const CardActionButton = ({type, id, setShowReplyForm, setShowEditForm}) => {
    const CommentContext = useContext(commentContext);
    const { showModal } = CommentContext;

    const handleAction = (type) => {
        if(type === 'delete'){
            showModal(true, id);
        } else if(type === 'reply'){
            setShowReplyForm(true);
        } else if(type === 'edit'){
            setShowEditForm(true);
        } else {
            setShowEditForm(false)
        }
    };

    const switchImage = () => {
        switch(type){
            case 'reply':
                return(                    
                    <ActionImage src={ReplyImage} alt={type} />
                );
            case 'edit':
                return(
                    <ActionImage src={EditImage} alt={type} />                    
                );
            case 'delete':
                return(
                    <ActionImage src={DeleteImage} alt={type} />                    
                );
            default:
                return null
        }
    }

  return (
    <Container onClick={() => handleAction(type)}>
      {switchImage()}
      <TypeText className={type} >{type}</TypeText>
    </Container>
  )
};

CardActionButton.propTypes = {
    type: PropTypes.string.isRequired,
    setShowReplyForm: PropTypes.func,
};

export default CardActionButton;
