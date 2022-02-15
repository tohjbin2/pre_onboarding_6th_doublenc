import React from 'react';
import type { GetServerSideProps } from 'next';
import axios from 'axios';
import * as S from './[category1Id].style';
import ConItem from '../../components/ConItem/ConItem';
import IconContainer from '../../components/IconContainer/IconContainer';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Index({
  conCategoriesData,
  conCategoryData,
}: {
  conCategoriesData: any;
  conCategoryData: any;
}) {
  const router = useRouter();
  const routerUrl = router.query.category1Id;

  return (
    <S.Container>
      <S.TopCategories>
        <S.CategoryWrapper>
          {conCategoriesData.map((el: any) => {
            return (
              <S.CategoryList
                key={el.id}
                selected={routerUrl === el.id.toLocaleString()}
              >
                <Link href={el.id.toLocaleString()}>
                  <S.CategoryATag
                    selected={routerUrl === el.id.toLocaleString()}
                  >
                    {el.name}
                  </S.CategoryATag>
                </Link>
              </S.CategoryList>
            );
          })}
        </S.CategoryWrapper>
      </S.TopCategories>
      <S.ContentWrapper>
        {routerUrl === '1' ? (
          conCategoryData.map((el: any) =>
            el.conItems.map((em: any) => {
              return (
                <ConItem
                  key={em.id}
                  imageUrl={em.imageUrl}
                  conCategory2={el.name}
                  name={em.name}
                  discountRate={em.discountRate}
                  minSellingPrice={em.minSellingPrice}
                  originalPrice={em.originalPrice}
                />
              );
            })
          )
        ) : (
          <IconContainer data={conCategoryData} />
        )}
      </S.ContentWrapper>
    </S.Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const category1Id = ctx.query.category1Id;

  const res1 = await axios.get('https://api2.ncnc.app/con-category1s');
  const categoriesData = res1.data;
  const conCategoriesData = categoriesData.conCategory1s;

  const res2 = await axios.get(
    `https://api2.ncnc.app/con-category1s/${category1Id}/nested`
  );
  const categoryData = res2.data;
  const conCategoryData = categoryData.conCategory1.conCategory2s;

  return {
    props: {
      conCategoriesData,
      conCategoryData,
    },
  };
};

export default Index;
