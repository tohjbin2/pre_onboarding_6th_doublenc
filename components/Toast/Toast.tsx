import * as S from './Toast.style';

interface ToastTypes {
  closeModalBtn: any;
  date: number;
  price: number;
  rate: number;
}
function Toast({ closeModalBtn, date, price, rate }: ToastTypes) {
  return (
    <S.Background>
      <S.ToastSection>
        <S.Bar>
          <S.BarTitle>옵션 선택하기</S.BarTitle>
          <S.CloseBtn onClick={closeModalBtn}>X</S.CloseBtn>
        </S.Bar>
        <S.ListSection>
          <S.ListBox>
            <S.DateBox>
              <S.DateTitle>유효기간</S.DateTitle>
              <S.DateDetail>{date}까지</S.DateDetail>
            </S.DateBox>
            <S.DiscountedPriceBox>
              <S.PriceTitle>할인가</S.PriceTitle>
              <S.PriceDetail>{price}원</S.PriceDetail>
            </S.DiscountedPriceBox>
          </S.ListBox>
          <S.RateBox>
            <S.DiscountRate>{rate}%</S.DiscountRate>
          </S.RateBox>
        </S.ListSection>
      </S.ToastSection>
    </S.Background>
  );
}

export default Toast;
