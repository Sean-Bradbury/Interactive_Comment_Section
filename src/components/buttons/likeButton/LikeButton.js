import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//Colors
import colors from '../../../styles/colors';

//images
import PlusImage from '../../../images/icon-plus.svg';
import MinusImage from '../../../images/icon-minus.svg';

//context
import commentContext from '../../../context/comment/commentContext';

const LikeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: start;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background-color: ${colors.colorNeutralVLightGray};
  &.desktop {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
  }
`;

const Score = styled.span`
  padding: 0 0.5rem;
  color: ${colors.colorPrimaryModBlue};
  font-weight: 500;
  min-width: 37px;
  &.desktop {
    padding: 1rem 0;
  }
`;

const LikeButtonImage = styled.img`
  object-fit: contain;
  object-position: center;
  padding: 5px;
  cursor: pointer;
  &:hover {
    filter: brightness(50%);
  }
  &:active,
  &:focus {
    opacity: 0.5;
  }
`;

const LikeButton = ({ score, className, id }) => {
  const [currentScore, setCurrentScore] = useState(score);

  const CommentContext = useContext(commentContext);
  const { updateLikesComment } = CommentContext;

  useEffect(() => {
    updateLikesComment(id, currentScore);
    // eslint-disable-next-line
  }, [currentScore]);

  const handleScoreClick = (direction) => {
    if (direction === 'plus') {
      setCurrentScore(currentScore + 1);
    } else if (direction === 'minus') {
      if (currentScore > 0) {
        setCurrentScore(currentScore - 1);
      }
    }
  };

  return (
    <LikeButtonContainer
      data-testid="like-button"
      className={className}
    >
      <LikeButtonImage
        src={PlusImage}
        alt="Plus"
        onClick={() => handleScoreClick('plus')}
      />
      <Score className={className}>{currentScore}</Score>
      <LikeButtonImage
        src={MinusImage}
        alt="Minus"
        onClick={() => handleScoreClick('minus')}
      />
    </LikeButtonContainer>
  );
};

LikeButton.propTypes = {
  score: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.any,
};

export default LikeButton;
