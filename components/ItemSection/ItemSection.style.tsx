import styled from 'styled-components';

export const ItemSection = styled.div`
  /* position: absolute; */
  display: flex;
  align-items: center;
  /* top: 95px; */
  width: 672px;
  border-bottom: 1px solid #eee;
`;
export const ItemImg = styled.div`
  width: 90px;
  height: 90px;
  margin: 17px 0 17px 17px;
  background-color: #f1f3f4;
  border-radius: 5px;
`;
export const ItemInfo = styled.div`
  padding: 0 20px;
`;
export const ItemBrand = styled.div`
  margin-bottom: 7px;
  color: #808080;
  font-size: 14px;
`;
export const ItemName = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const ItemPriceBox = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
`;
export const DiscountRate = styled.div`
  margin-right: 10px;
  color: #ff5757;
  font-size: 16px;
`;
export const DiscountedPrice = styled.div`
  margin-right: 10px;
  font-size: 16px;
  font-weight: 600;
`;
export const OriginalPrice = styled.div`
  color: #808080;
  font-size: 14px;
  text-decoration: line-through;
`;
