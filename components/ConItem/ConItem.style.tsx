export const ItemContainer = styled.div`
  display: flex;
  padding: 20px;
  border-top-style: solid;
  border-top-width: 1px;
  border-color: #eee;
  background-color: #fff;
`;

export const ItemWrapper = styled.div`
  padding: 0.25rem 0;
  display: flex;
  align-items: center;
`;

export const ItemImage = styled.img`
  width: 70px;
  height: 70px;
`;

export const ItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const ItemCategory2 = styled.h2`
  color: #999;
  font-size: 13px;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
`;

import styled from 'styled-components';

export const ItemName = styled.h1`
  font-size: 16px;
  font-weight: 600;
  box-sizing: border-box;
`;

export const ItemPriceInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const DiscountRate = styled.p`
  font-size: 16px;
  margin-right: 10px;
  color: #f75656;
`;

export const MinSellingPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
`;

export const OriginalPrice = styled.p`
  color: #999;
  text-decoration: line-through;
`;
