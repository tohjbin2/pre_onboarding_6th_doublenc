import React from 'react';
import styled from 'styled-components';

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #dddddd;
`;

const Wrapper = styled.div`
  max-width: 672px;
  margin: 0 auto;
`;

export default AppLayout;
