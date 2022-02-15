import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import ConItem from '../components/ConItem/ConItem';

function Home({ categoryData }: { categoryData: any }) {
  const conCategoryData = categoryData.conCategory1s;
  // console.log(conCategoryData);

  return (
    <HomeContainer>
      <HomeWrapper>
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
        <ConItem />
        <ConItem />
        <ConItem />
      </HomeWrapper>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  max-width: 672px;
  margin: 0 auto;
`;

const HomeWrapper = styled.div`
  background-color: #f1f3f4;
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

export const getStaticProps = async () => {
  const res = await fetch('https://api2.ncnc.app/con-category1s');
  const categoryData = await res.json();

  return {
    props: {
      categoryData,
    },
  };
};

export default Home;
