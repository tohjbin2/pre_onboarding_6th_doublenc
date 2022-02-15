import React from 'react';
import * as S from './ItemSection.style';

function ItemSection() {
  return (
    <S.ItemSection>
      <S.ItemImg />
      <S.ItemInfo>
        <S.ItemBrand>브랜드명</S.ItemBrand>
        <S.ItemName>상품명</S.ItemName>
        <S.ItemPriceBox>
          <S.DiscountRate>20%</S.DiscountRate>
          <S.DiscountedPrice>8000원</S.DiscountedPrice>
          <S.OriginalPrice>10000원</S.OriginalPrice>
        </S.ItemPriceBox>
      </S.ItemInfo>
    </S.ItemSection>
  );
}

export default ItemSection;
