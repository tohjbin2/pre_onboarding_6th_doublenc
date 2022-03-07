import axios from 'axios';

export const COMPANY_TERM = [
  '회사소개서',
  '사업/제휴 문의',
  '개인정보처리방침',
];

export const COMPANY_INFO = [
  '대표 : 박진희 | 이메일 : cs@doublenc.com',
  '사업자 등록번호 : 290-86-00970 | 통신판매업신고번호 : 제2020-서울성동-00206호',
  '개인정보보호책임자 : 김웅비',
  '서울특별시 강남구 테헤란로 501, 4층(삼성동, 브이플렉스)',
  '고객센터: 02-6265-0018',
];

export async function getItemInfo(paramsId: string | string[] | undefined) {
  const request = await axios.get(
    `https://api2.ncnc.app/con-items/${paramsId}`
  );
  const {
    data: { conItem },
  } = request;

  const {
    id,
    name,
    originalPrice,
    minSellingPrice,
    ncSellingPrice,
    warning,
    discountRate,
    imageUrl,
    options,
  } = conItem;

  const itemInfo = {
    id,
    name,
    originalPrice,
    minSellingPrice,
    ncSellingPrice,
    warning,
    discountRate,
    imageUrl,
    options,
    brand: conItem['conCategory2'].name,
  };

  return {
    itemInfo,
  };
}
