import styled from 'styled-components';

export const ItemsSection = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

// export const ItemSection = styled.div`
//   display: flex;
//   align-items: center;
//   width: 672px;
//   border-bottom: 1px solid #eee;
// `;
// export const ItemImg = styled.div`
//   width: 90px;
//   height: 90px;
//   margin: 17px 0 17px 17px;
//   background-color: #f1f3f4;
//   border-radius: 5px;
// `;
// export const ItemInfo = styled.div`
//   padding: 0 20px;
// `;
// export const ItemBrand = styled.div`
//   margin-bottom: 7px;
//   color: #808080;
//   font-size: 14px;
// `;
// export const ItemName = styled.div`
//   font-size: 16px;
//   font-weight: 600;
// `;

// export const ItemPriceBox = styled.div`
//   margin-top: 14px;
//   display: flex;
//   align-items: center;
// `;
// export const DiscountRate = styled.div`
//   margin-right: 10px;
//   color: #ff5757;
//   font-size: 16px;
// `;
// export const DiscountedPrice = styled.div`
//   margin-right: 10px;
//   font-size: 16px;
//   font-weight: 600;
// `;
// export const OriginalPrice = styled.div`
//   color: #808080;
//   font-size: 14px;
//   text-decoration: line-through;
// `;

export const NoteSection = styled.div`
  /* position: absolute; */
  width: 632px;
  top: 219px;
  margin: 0 30px;
  padding: 20px 0;
`;

export const WarningBox = styled.div``;
export const WarningTitle = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 600;
`;
export const WarningDetail = styled.div`
  margin-bottom: 20px;
  color: #999;
  font-size: 14px;
  line-height: 1.5;
`;
export const RefundBox = styled.div``;
export const RefundTitle = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 600;
`;
export const RefundDetail = styled.div`
  color: #ff5757;
  font-size: 14px;
  line-height: 1.5;
`;

export const SelectToastSection = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 672px;
  height: 80px;
  bottom: 0;
  background-color: #ff5757;
  z-index: 1000;
  cursor: pointer;
`;

export const ToastBtn = styled.div`
  color: #ffffff;
  font-size: 16px;
`;
