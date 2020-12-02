import React from 'react';
import { Hamburger, Copy, Door } from '@components/Icons';
import { AvatarStack, Avatar } from '@primer/components';
import S from './style';

const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <S.HamburgerButton>
        <Hamburger size={24} />
      </S.HamburgerButton>
      <S.CodeWrapper>
        <S.Code>#601 235</S.Code>
        <Copy size={20} />
      </S.CodeWrapper>
      <S.RightWrapper>
        <AvatarStack alignRight>
          <Avatar
            style={{ width: '24px', height: '24px' }}
            alt="Primer"
            src="https://avatars.githubusercontent.com/primer"
          />
          <Avatar
            style={{ width: '24px', height: '24px' }}
            alt="GitHub"
            src="https://avatars.githubusercontent.com/github"
          />
        </AvatarStack>
        <S.DoorButton>
          <Door size={24} />
        </S.DoorButton>
      </S.RightWrapper>
    </S.Wrapper>
  );
};

export default Header;
