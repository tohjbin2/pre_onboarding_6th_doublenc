import { useState } from 'react';
import * as S from './index.style';

import axios from 'axios';
import ItemSection from '../../components/ItemSection/ItemSection';
import Toast from '../../components/Toast/Toast';

/* //MEMO: axios
export async function getServerSideProps(context: any) {
  const res = await axios.get(`https://api2.ncnc.app/con-items/`);
  const data: any = res.data;
  return {
    item: { data },
  };
}
*/
/* //MEMO: fetch
export const getStaticProps: GetStaticProps = async () => {
  const res1 = await fetch('https://api2.ncnc.app/con-category1s');
  const categoryData = await res1.json();

  const res2 = await fetch('https://api2.ncnc.app/con-items/soon');
  const soonData = await res2.json();

  // console.log(soonData);

  return {
    props: {
      categoryData,
      soonData,
    },
  };
};
*/

function index({ item }) {
  const [toast, settoast] = useState(false);

  return (
    <S.ItemsSection>
      <ItemSection />
      {/* <S.ItemSection>
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
      </S.ItemSection> */}
      <S.NoteSection>
        <S.WarningBox>
          <S.WarningTitle>유의사항</S.WarningTitle>
          <S.WarningDetail>유의사항 내용</S.WarningDetail>
        </S.WarningBox>
        <S.RefundBox>
          <S.RefundTitle>환불규정</S.RefundTitle>
          <S.RefundDetail>환불규정 내용</S.RefundDetail>
        </S.RefundBox>

        <S.SelectToastSection>
          <S.ToastBtn>옵션 선택하기</S.ToastBtn>
        </S.SelectToastSection>
      </S.NoteSection>
      <Toast />
    </S.ItemsSection>
  );
}

export default index;
