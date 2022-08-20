import React from 'react';
import styled from 'styled-components';

const AvatarImg = styled.img`
  height: 30px;
  width: 30px;
  &.desktop {
    height: 50px;
    width: 50px;
  }
`;

const Avatar = ({ src, alt, className }) => {
  return <AvatarImg src={src} alt={alt} className={className} />;
};

export default Avatar;
