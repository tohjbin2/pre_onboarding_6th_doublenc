import React from 'react';
import styled from 'styled-components';

function ConItem() {
  return (
    <ItemContainer>
      <ItemWrapper>
        <ItemImage />
        <ItemInfoWrapper>
          <ItemCategory2>버거킹</ItemCategory2>
          <ItemName>와퍼주니어세트</ItemName>
          <ItemPriceInfoWrapper>
            <DiscountRate>34%</DiscountRate>
            <MinSellingPrice>4,240 원</MinSellingPrice>
            <OriginalPrice>6,400 원</OriginalPrice>
          </ItemPriceInfoWrapper>
        </ItemInfoWrapper>
      </ItemWrapper>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  display: flex;
  padding: 20px;
  border-top-style: solid;
  border-top-width: 1px;
  border-color: #eee;
  background-color: #fff;
`;

const ItemWrapper = styled.div`
  padding: 0.25rem 0;
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 70px;
  height: 70px;
`;

const ItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const ItemCategory2 = styled.h2`
  color: #999;
  font-size: 13px;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
`;

const ItemName = styled.h1`
  font-size: 16px;
  font-weight: 600;
  box-sizing: border-box;
`;

const ItemPriceInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const DiscountRate = styled.p`
  font-size: 16px;
  margin-right: 10px;
  color: #f75656;
`;

const MinSellingPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
`;

const OriginalPrice = styled.p`
  color: #999;
  text-decoration: line-through;
`;

export default ConItem;
