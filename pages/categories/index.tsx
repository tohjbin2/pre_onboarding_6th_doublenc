import React from 'react';
import type { GetServerSideProps } from 'next';
import axios from 'axios';
import styled from 'styled-components';
import ConItem from '../../components/ConItem/ConItem';
import IconContainer from '../../components/IconContainer/IconContainer';

function index({
  conCategoryData,
  conSoonData,
  conCafeData,
}: {
  conCategoryData: any;
  conSoonData: any;
  conCafeData: any;
}) {
  // console.log(conCategoryData);

  return (
    <Container>
      <TopCategories>
        <CategoryWrapper>
          {conCategoryData.map((el: any) => {
            return <CategoryList key={el.id}>{el.name}</CategoryList>;
          })}
        </CategoryWrapper>
      </TopCategories>
      <ContentWrapper>
        {/* {conSoonData.conCategory2s.map((el: any) =>
          el.conItems.map((em: any) => {
            return (
              <ConItem
                key={em.id}
                imageUrl={em.imageUrl}
                conCategory2={el.name}
                name={em.name}
                discountRate={em.discountRate}
                minSellingPrice={em.minSellingPrice}
                originalPrice={em.originalPrice}
              />
            );
          })
        )} */}
        {/* {<IconContainer data={conCafeData} />} */}
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #eeeeee;
`;

const TopCategories = styled.section`
  max-width: 672px;
  overflow: hidden;
  /* position: fixed; */
  /* z-index: 10; */
  box-sizing: border-box;
  background-color: #fff;
`;

const CategoryWrapper = styled.ul`
  padding: 0px 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryList = styled.li`
  padding: 10px 14px;
  color: #333;

  /* color: #f75656;
  border-bottom: 2px solid #f75656 !important;
  padding: 10px 14px 9px 14px; */

  height: 41px;
  box-shadow: none !important;
  cursor: pointer;
  border: none;
  background-color: #fff;
  font-size: 16px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  /* padding-top: 51px; */
  padding-top: 10px;
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const res1 = await axios.get('https://api2.ncnc.app/con-category1s');
  const categoryData = res1.data;
  const conCategoryData = categoryData.conCategory1s;

  const res2 = await axios.get('https://api2.ncnc.app/con-category1s/1/nested');
  const soonData = res2.data;
  const conSoonData = soonData.conCategory1;

  const res3 = await axios.get(
    'https://api2.ncnc.app/con-category1s/67/nested'
  );
  const cafeData = res3.data;
  const conCafeData = cafeData.conCategory1.conCategory2s;

  return {
    props: {
      conCategoryData,
      conSoonData,
      conCafeData,
    },
  };
};

export default index;
