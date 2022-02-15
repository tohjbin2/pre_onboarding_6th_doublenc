import * as S from './ConItem.style';
import { formatingNumber } from '../../shared/utils';

interface IconItem {
  imageUrl: string;
  conCategory2: string;
  name: string;
  discountRate: number;
  minSellingPrice: number;
  originalPrice: number;
}

function ConItem({
  imageUrl,
  conCategory2,
  name,
  discountRate,
  minSellingPrice,
  originalPrice,
}: IconItem) {
  return (
    <S.ItemContainer>
      <S.ItemWrapper>
        <S.ItemImage src={imageUrl} />
        <S.ItemInfoWrapper>
          <S.ItemCategory2>{conCategory2}</S.ItemCategory2>
          <S.ItemName>{name}</S.ItemName>
          <S.ItemPriceInfoWrapper>
            <S.DiscountRate>{discountRate}%</S.DiscountRate>
            <S.MinSellingPrice>
              {formatingNumber(minSellingPrice)}
            </S.MinSellingPrice>
            <S.OriginalPrice>{formatingNumber(originalPrice)}</S.OriginalPrice>
          </S.ItemPriceInfoWrapper>
        </S.ItemInfoWrapper>
      </S.ItemWrapper>
    </S.ItemContainer>
  );
}

export default ConItem;
