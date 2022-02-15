import styled from 'styled-components';

export const Container = styled.div`
  background-color: #eeeeee;
`;

export const TopCategories = styled.section`
  max-width: 672px;
  overflow: hidden;
  /* position: fixed; */
  /* z-index: 10; */
  box-sizing: border-box;
  background-color: #fff;
`;

export const CategoryWrapper = styled.ul`
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

export const CategoryList = styled.li<{ selected: boolean }>`
  padding: ${({ selected }) =>
    !selected ? '10px 14px' : '10px 14px 9px 14px'};
  color: #f75656;
  border-bottom: ${({ selected }) =>
    selected && '2px solid #f75656 !important'};
  height: 41px;
  box-shadow: none !important;
  cursor: pointer;
  border: none;
  background-color: #fff;
  font-size: 16px;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  /* padding-top: 51px; */
  padding-top: 10px;
`;

export const CategoryATag = styled.a<{ selected: boolean }>`
  text-decoration: none;
  color: ${({ selected }) => (!selected ? '#333' : '#f75656')};
`;
