import React from 'react';
import * as S from './Nav.style';
import { BsList } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineTicket } from 'react-icons/hi';

function Nav() {
  return (
    <S.NavSection>
      <S.ListIcon>
        <BsList size="30" />
      </S.ListIcon>
      <S.Title>니콘내콘</S.Title>
      <S.IconSection>
        <S.SearchIcon>
          <AiOutlineSearch size="30" />
        </S.SearchIcon>
        <S.TicketIcon>
          <HiOutlineTicket size="30" />
        </S.TicketIcon>
      </S.IconSection>
    </S.NavSection>
  );
}

export default Nav;
