import React from 'react';
import { Container, Navbar, Cover } from './styles';
import Logo from '../../images/logo-horizontal-preta.png';

const Header: React.FC = () => (
  <Container>
    <Navbar>
      <a href="https://www.konekto.me"><img src={Logo} alt="Konekto" /></a>
      <div>
        <a href="https://www.konekto.me/sobre">sobre</a>
        <a href="https://www.konekto.me/servicos">serviços</a>
        <a href="https://www.konekto.me/industrias">indústrias</a>
        <a href="https://www.konekto.me/idiomas">idiomas</a>
        <a href="https://www.konekto.me/idiomas">orçamento rápido</a>
      </div>
    </Navbar>

    <Cover>
      <h1>Orçamento Instantâneo</h1>
    </Cover>
  </Container>
);

export default Header;
