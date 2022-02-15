import type { GetStaticProps, GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import ConItem from '../components/ConItem/ConItem';
import axios from 'axios';
import { COMPANY_TERM } from '../shared/constants';
import { COMPANY_INFO } from '../shared/constants';
import { MdExpandMore } from 'react-icons/md';

function Home({
  categoryData,
  soonData,
}: {
  categoryData: any;
  soonData: any;
}) {
  const conCategoryData = categoryData.conCategory1s;
  const conSoonData = soonData.conItems;

  const [isInfoOpen, setInfoOpen] = useState(false);

  const handleInfoOpen = () => {
    setInfoOpen(!isInfoOpen);
  };

  return (
    <HomeContainer>
      <IconContainer>
        <IconWrapper>
          {conCategoryData?.map((el: any) => {
            return (
              <Icon key={el.id}>
                <Link href="/">
                  <CategoryWrapper>
                    <CategoryImg src={el.imageUrl} />
                    <CategoryName>{el.name}</CategoryName>
                  </CategoryWrapper>
                </Link>
              </Icon>
            );
          })}
        </IconWrapper>
      </IconContainer>
      <TextWrapper>
        <Title>놓치지 마세요</Title>
        <Subtitle>오늘의 땡처리콘</Subtitle>
      </TextWrapper>
      {conSoonData.map((el: any) => {
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
      <TermAndInfoWrapper>
        <TermWrapper>
          {COMPANY_TERM.map((el: string, idx: number) => {
            return <Term key={idx}>{el}</Term>;
          })}
        </TermWrapper>
        <CompanyInfoWrapper>
          <CompanyNameWrapper onClick={handleInfoOpen}>
            <CompanyName>(주) 더블엔씨</CompanyName>
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
          </CompanyNameWrapper>
          {isInfoOpen &&
            COMPANY_INFO.map((el: string, idx: number) => {
              return <Info key={idx}>{el}</Info>;
            })}
        </CompanyInfoWrapper>
      </TermAndInfoWrapper>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background-color: #eeeeee;
`;

const IconContainer = styled.section`
  padding: 17px;
`;

const IconWrapper = styled.div`
  width: 100%;
`;

const Icon = styled.div`
  width: 33%;
  height: 8rem;
  margin: 1px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background-color: white;
`;

const CategoryWrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 0.25s ease-out;
  }
`;

const CategoryImg = styled.img`
  width: 43px;
  height: 43px;
`;

const CategoryName = styled.p`
  padding: 0 0.5rem;
  margin-top: 10px;
  font-size: 0.875rem;
`;

const TextWrapper = styled.div`
  padding: 0 0 17px 17px;
`;

const Title = styled.h2`
  font-size: 13px;
  line-height: 15.6px;
  font-weight: 500;
  color: #ff5757;
`;

const Subtitle = styled.h1`
  margin-top: 5px;
  font-size: 16px;
  line-height: 19.2px;
  font-weight: 600;
`;

const TermAndInfoWrapper = styled.section`
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  line-height: 1.7;
  border-top: 1px solid #eee;
  font-size: 11px;
  color: #666;
  font-weight: 300;
`;

const TermWrapper = styled.ul``;

const Term = styled.li`
  font-size: 12px;
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #333;
`;

const CompanyName = styled.div`
  padding: 10px 5px 5px;
  box-shadow: none !important;
  cursor: pointer;
  border: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;
`;

const CompanyInfoWrapper = styled.div``;

const CompanyNameWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const Info = styled.div``;

export const getStaticProps: GetStaticProps = async () => {
  const res1 = await fetch('https://api2.ncnc.app/con-category1s');
  const categoryData = await res1.json();

  const res2 = await fetch('https://api2.ncnc.app/con-items/soon');
  const soonData = await res2.json();

  // console.log(soonData);

  return {
    props: {
      categoryData,
      soonData,
    },
  };
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await axios.get('https://api2.ncnc.app/con-items/soon');
//   const result = await res.json;

//   return {
//     props: {
//       data: all,
//     },
//   };
// };

export default Home;
