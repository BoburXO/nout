import React from 'react'
import styled from 'styled-components';
import ph1 from '../images/1ft.jpg';
import ph2 from '../images/2ft.jpg';
import ph3 from '../images/3ft.jpg';
import ph4 from '../images/ft4.jpg';
import ph5 from '../images/ft5.jpg';
import ph6 from '../images/ft6.jpg';
import ph7 from '../images/ft7.jpg';
import ph8 from '../images/ft8.jpg';

const Header = () => {
  return (
    <Head>
        <header>
        <div id="carouselExampleInterval" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src={ph1} class="d-block w-100" alt="first"/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={ph2} class="d-block w-100" alt="second"/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={ph3} class="d-block w-100" alt="th"/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={ph4} class="d-block w-100" alt="yj"/>
    </div>
    <div class="carousel-item " data-bs-interval="1000">
      <img src={ph5} class="d-block w-100" alt="hjhj"/>
    </div>
    <div class="carousel-item " data-bs-interval="1000">
      <img src={ph6} class="d-block w-100" alt="jkjh"/>
    </div>
    <div class="carousel-item " data-bs-interval="1000">
      <img src={ph7} class="d-block w-100" alt="jkjh"/>
    </div>
    <div class="carousel-item " data-bs-interval="1000">
      <img src={ph8} class="d-block w-100" alt="jkjh"/>
    </div>
  </div>
  <button class="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </header>
    </Head>
  )
}
const Head =styled.div`
img{
  height: 70vh;
}
`
export default Header;