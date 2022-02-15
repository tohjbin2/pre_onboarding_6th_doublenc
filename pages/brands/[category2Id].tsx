import React from 'react';
import styled from 'styled-components';
import type { GetServerSideProps } from 'next';
import axios from 'axios';

function Brands() {
  return (
    <Container>
      <TopWrapper>@@개의 상품</TopWrapper>
      <div>BRANDS</div>
    </Container>
  );
}

const Container = styled.div``;

const TopWrapper = styled.div`
  margin-top: -1px;
  padding: 10px;
  background-color: #fff;
  font-size: 14px;
  line-height: 1.15;
  color: #333;
`;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const category2Id = ctx.query.category2Id;

  const res = await axios.get(
    `https://api2.ncnc.app/con-category1s/${category2Id}/nested`
  );
  const categoryData = res.data;
  const conCategoryData = categoryData.conCategory1.conCategory2s;

  return {
    props: {
      conCategoryData,
    },
  };
};

export default Brands;
