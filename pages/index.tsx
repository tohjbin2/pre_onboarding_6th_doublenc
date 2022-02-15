import React, { useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import * as S from './index.style';

import ConItem from '../components/ConItem/ConItem';
import IconContainer from '../components/IconContainer/IconContainer';

import { COMPANY_TERM } from '../shared/constants';
import { COMPANY_INFO } from '../shared/constants';

import { MdExpandMore } from 'react-icons/md';

function Home({
  conCategoryData,
  conSoonData,
}: {
  conCategoryData: any;
  conSoonData: any;
}) {
  const [isInfoOpen, setInfoOpen] = useState(false);

  const handleInfoOpen = () => {
    setInfoOpen(!isInfoOpen);
  };

  return (
    <S.HomeContainer>
      <IconContainer data={conCategoryData} from="home" />
      <S.TextWrapper>
        <S.Title>놓치지 마세요</S.Title>
        <S.Subtitle>오늘의 땡처리콘</S.Subtitle>
      </S.TextWrapper>
      {conSoonData?.map((el: any) => {
        return (
          <ConItem
            key={el.id}
            imageUrl={el.imageUrl}
            conCategory2={el.conCategory2.name}
            name={el.name}
            discountRate={el.discountRate}
            minSellingPrice={el.minSellingPrice}
            originalPrice={el.originalPrice}
          />
        );
      })}
      <S.TermAndInfoWrapper>
        <S.TermWrapper>
          {COMPANY_TERM.map((el: string, idx: number) => {
            return <S.Term key={idx}>{el}</S.Term>;
          })}
        </S.TermWrapper>
        <S.CompanyInfoWrapper>
          <S.CompanyNameWrapper onClick={handleInfoOpen}>
            <S.CompanyName>(주) 더블엔씨</S.CompanyName>
            {!isInfoOpen ? (
              <MdExpandMore
                style={{
                  fontSize: '24px',
                  transition: 'transform ease 0.5s',
                }}
              />
            ) : (
              <MdExpandMore
                style={{
                  fontSize: '24px',
                  transform: 'rotate(180deg)',
                  transition: 'transform ease 0.5s',
                }}
              />
            )}
          </S.CompanyNameWrapper>
          {isInfoOpen &&
            COMPANY_INFO.map((el: string, idx: number) => {
              return <S.Info key={idx}>{el}</S.Info>;
            })}
        </S.CompanyInfoWrapper>
      </S.TermAndInfoWrapper>
    </S.HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res1 = await axios.get('https://api2.ncnc.app/con-category1s');
  const categoryData = res1.data;
  const conCategoryData = categoryData.conCategory1s;

  const res2 = await axios.get('https://api2.ncnc.app/con-items/soon');
  const soonData = res2.data;
  const conSoonData = soonData.conItems;

  return {
    props: {
      conCategoryData,
      conSoonData,
    },
  };
};

export default Home;
