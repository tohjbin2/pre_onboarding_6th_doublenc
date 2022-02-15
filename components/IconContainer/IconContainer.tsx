import Link from 'next/link';
import * as S from './IconContainer.style';

function IconContainer({ data, from }: { data: any; from: string }) {
  console.log(data);

  return (
    <S.IconContainer>
      <S.IconWrapper>
        {data?.map((el: any) => {
          return (
            <S.Icon key={el.id}>
              <Link
                href={
                  from === 'home' ? `/categories/${el.id}` : `/brands/${el.id}`
                }
                passHref
              >
                <S.CategoryWrapper>
                  <S.CategoryImg src={el.imageUrl} />
                  <S.CategoryName>{el.name}</S.CategoryName>
                </S.CategoryWrapper>
              </Link>
            </S.Icon>
          );
        })}
      </S.IconWrapper>
    </S.IconContainer>
  );
}

export default IconContainer;
