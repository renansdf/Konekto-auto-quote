import styled from 'styled-components';
import BGVerde from '../../images/forma-tr-verde.png';
import BGRosa from '../../images/forma-bl-rosa.png';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 7px 0px;
`;

export const Navbar = styled.nav`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  z-index: 2;

  > a{
    display: block;
  }

  img{
    max-width: 120px;
    margin: 0px;
  }

  div{
    a{
      padding: 5px 20px;
      color: #000;
      text-decoration: none;
      font-size: 16px;
      line-height: 1.2em;
      font-weight: 300;
      letter-spacing: .5px;
    }

    a:last-child{
      font-weight: 700;
    }
  }
`;

export const Cover = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  padding-top: 60px;
  width: 100%;
  position: relative;
  z-index: 1;

  background-image: url(${BGVerde}), url(${BGRosa});

  background-repeat: no-repeat, no-repeat;
  background-position: 100% 100%,0 100%;
  background-size: auto 80%,auto 80%;


  h1{
    font-weight: 900;
    font-size: 110px;
    line-height: 1em;
    text-align: center;
  }
`;
