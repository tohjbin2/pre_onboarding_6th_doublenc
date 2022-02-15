import { useState } from 'react';
import * as S from './index.style';

import axios from 'axios';
import ItemSection from '../../components/ItemSection/ItemSection';
import ConItem from '../../components/ConItem/ConItem';
import Toast from '../../components/Toast/Toast';
import ToastTextBtn from '../../components/ToastTextBtn/ToastTextBtn';

/*
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get('https://api2.ncnc.app/con-category1s');
  const categoryData = res.data;

  return {
    props: {
      categoryData,
    },
  };
};
*/

function index() {
  const [toastModal, setToastModal] = useState(false);
  const [optText, setOptText] = useState(false);

  const openModal = () => {
    setToastModal(true);
    setOptText(true);
  };
  const closeModal = e => {
    e.preventDefault();
    setToastModal(false);
    setOptText(false);
  };

  return (
    <S.ItemsSection>
      {/*
      <ConItem  />
      */}
      <ItemSection />

      <S.NoteSection>
        <S.WarningBox>
          <S.WarningTitle>유의사항</S.WarningTitle>
          <S.WarningDetail>유의사항 내용</S.WarningDetail>
        </S.WarningBox>
        <S.RefundBox>
          <S.RefundTitle>환불규정</S.RefundTitle>
          <S.RefundDetail>환불규정 내용</S.RefundDetail>
        </S.RefundBox>

        <S.ToastSectionBackground>
          <S.SelectToastSection onClick={openModal}>
            <S.ToastBtn>옵션 선택하기</S.ToastBtn>
          </S.SelectToastSection>
        </S.ToastSectionBackground>
      </S.NoteSection>

      {optText && <ToastTextBtn />}
      {toastModal && (
        <Toast
          closeModalBtn={closeModal}
          // date={date}
          // price={price}
          // rate={rate}
        />
      )}
    </S.ItemsSection>
  );
}

export default index;
