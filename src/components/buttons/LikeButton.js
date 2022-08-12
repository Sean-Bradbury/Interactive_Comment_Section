import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//Colors
import colors from '../../styles/colors';

//images
import PlusImage from '../../images/icon-plus.svg';
import MinusImage from '../../images/icon-minus.svg';

const LikeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: start;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background-color: ${colors.colorNeutralVLightGray};
  &.desktop {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0.5rem;
  }
`;

const Score = styled.span`
  padding: 0 1rem;
  color: ${colors.colorPrimaryModBlue};
  font-weight: 500;
  &.desktop {
    padding: 1rem 0;
  }
`;

const LikeButtonImage = styled.img`
  width: 10px;
`;

const LikeButton = ({ score, className }) => {
  const [currentScore, setCurrentScore] = useState(score);

  const handleScoreClick = (direction) => {
    if (direction === 'plus') {
      setCurrentScore(score++);
    } else if (direction === 'minus') {
      setCurrentScore(score--);
    }
  };

  return (
    <LikeButtonContainer className={className}>
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
};

export default LikeButton;
