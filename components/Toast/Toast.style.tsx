import styled from 'styled-components';

export const ToastSection = styled.div`
  position: fixed;
  width: 672px;
  bottom: 0;
  padding-bottom: 80px;
  background-color: white;
  /* transition-property: transform; */
`;
export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #f1f3f4;
`;
export const BarTitle = styled.div`
  margin-left: 20px;
  font-size: 16px;
`;
export const CloseBtn = styled.button`
  margin-right: 20px;
  border-style: none;
  font-size: 16px;
  cursor: pointer;
`;

export const ListSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListBox = styled.div`
  padding: 10px 0px 10px 20px;
`;

export const DateBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
export const DateTitle = styled.div`
  font-size: 12px;
`;
export const DateDetail = styled.div`
  margin-left: 10px;
  font-size: 16px;
`;

export const DiscountedPriceBox = styled.div`
  display: flex;
  align-items: center;
`;

export const RateBox = styled.div`
  padding-right: 20px;
`;
export const DiscountRate = styled.div`
  color: #ff5757;
  font-size: 16px;
`;

export const PriceTitle = styled.div`
  font-size: 12px;
`;
export const PriceDetail = styled.div`
  margin-left: 20px;
  font-size: 16px;
`;
