import * as S from './Toast.style';

function Toast() {
  return (
    <S.ToastSection>
      <S.Bar>
        <S.BarTitle>옵션 선택하기</S.BarTitle>
      </S.Bar>
      <S.ListSection>
        <S.DateBox>
          <S.DateTitle>유효기간</S.DateTitle>
          <S.DateDetail>까지</S.DateDetail>
        </S.DateBox>
        <S.DiscountedPriceBox>
          <S.PriceTitle>할인가</S.PriceTitle>
          <S.PriceDetail>원</S.PriceDetail>
        </S.DiscountedPriceBox>
      </S.ListSection>
    </S.ToastSection>
  );
}

export default Toast;
