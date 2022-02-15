import styled from 'styled-components';

export const IconContainer = styled.section`
  padding: 17px;
`;

export const IconWrapper = styled.div`
  width: 100%;
`;

export const Icon = styled.div`
  width: 33%;
  height: 8rem;
  margin: 1px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background-color: white;
`;

export const CategoryWrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #333;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 0.25s ease-out;
  }
`;

export const CategoryImg = styled.img`
  width: 43px;
  height: 43px;
`;

export const CategoryName = styled.p`
  padding: 0 0.5rem;
  margin-top: 10px;
  font-size: 0.875rem;
`;
