import React from 'react';

import Main from '../../components/Main';

import { Container, Wrapper } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> */}
        <Main />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  );
};

export default Home;
