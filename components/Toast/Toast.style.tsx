import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  /* left: 0px; */
  width: 672px;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

export const ToastSection = styled.div`
  position: fixed;
  width: 672px;
  bottom: 0;
  padding-bottom: 80px;
  background-color: white;
  -webkit-transition: width 2s, height 2s, background-color 2s,
    -webkit-transform 2s;
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
