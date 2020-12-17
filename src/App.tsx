import React from 'react';
import Header from './pages/header';
import Footer from './pages/footer';

import Quote from './pages/quote';
import Sidebar from './pages/sidebar';

import { Container } from './styles/AppStyles';

const App: React.FC = () => (
  <>
    <Header />
    <Container>
      <Quote />
      <Sidebar />
    </Container>
    <Footer />
  </>
);

export default App;
