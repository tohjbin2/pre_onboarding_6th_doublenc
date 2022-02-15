import styled from 'styled-components';

export const ItemsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

export const NoteSection = styled.div`
  width: 672px;
  margin: 20px;
`;

export const WarningBox = styled.div`
  padding-left: 20px;
`;
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
export const RefundBox = styled.div`
  padding-left: 20px;
`;
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
export const ToastSectionBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  /* left: 0px; */
  width: 672px;
  height: 100%;
  background-color: white;
  z-index: -100;
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
