import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

import Quote from './components/quote';
import Sidebar from './components/sidebar';

import { Container, Content } from './styles/AppStyles';

const App: React.FC = () => (
  <>
    <Header />
    <Container>
      <Content>
        <Quote />
        <Sidebar />
      </Content>
    </Container>
    <Footer />
  </>
);

export default App;
