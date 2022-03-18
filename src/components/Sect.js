import React from 'react'
import styled from 'styled-components';
import p1 from '../images/acer.png';
import p2 from '../images/asus.png';
import p3 from '../images/lenovo.png';
import p4 from '../images/msi.png';
import p5 from '../images/dell.png';
import p6 from '../images/hp.png';
import p7 from '../images/microsoft.png';
import p8 from '../images/razer.png';
import p9 from '../images/lg.png';
import p10 from '../images/samsung.png';
import p11 from '../images/apple.png';
import ft3 from '../images/3ft.jpg';
import ft8 from '../images/ft8.jpg';
import Slider from "react-slick";

const Sect = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: -1,
        autoplay:true,
        autoplaySpeed: 0,
        cssEase: "linear",
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
    };
  
  return (
    <Sec>
        <section>
            <div className="container">
                <h2>Ноутбуки в Ташкенте. Выберите из 200 моделей!</h2>
                <h3>Магазин Ноутбуков №1. Доставка по  Узбекистану. Гарантия до 2 лет</h3>
                <Slider {...settings}>
          <div>
            <img src={p1} alt="" />
          </div>
          <div>
          <img src={p2} alt="" />
          </div>
          <div>
          <img src={p3} alt="" />
          </div>
          <div>
          <img src={p4} alt="" />
          </div>
          <div>
          <img src={p5} alt="" />
          </div>
          <div>
          <img src={p6} alt="" />
          </div>
          <div>
          <img src={p7} alt="" />
          </div>
          <div>
          <img src={p8} alt="" />
          </div>
          <div>
          <img src={p9} alt="" />
          </div>
          <div>
          <img src={p10} alt="" />
          </div>
          <div>
          <img src={p11} alt="" />
          </div>

        </Slider>

                    {/* <div className="box-logos">
                        <img src={p1} alt="" />
                        <img src={p2} alt="" />
                        <img src={p3} alt="" />
                        <img src={p4} alt="" />
                        <img src={p5} alt="" />
                        <img src={p6} alt="" />
                        <img src={p7} alt="" />
                        <img src={p8} alt="" />
                        <img src={p9} alt="" />
                        <img src={p10} alt="" />
                        <img src={p11} alt="" />
                    </div> */}
                <h2>Базовый уровень</h2>
                <div className="floats">
                        <img src={ft3} alt="" />
                        <img className='ikki' src={ft8} alt="" />
                </div>
            </div>
        </section>
    </Sec>
  )
}
const Sec = styled.div`
text-align: left;
section{
    margin-top: 150px;
}
h3{
    margin-bottom: 50px;
}
/* .box-logos{
    display: grid;
    grid-template-columns: repeat(7,1fr);
    grid-gap: 30px;
    padding-top:100px;
    img{
        width: 70%;
    }
} */
h4{
    margin-top: 50px;
    margin-bottom: 100px !important;
}
.floats{
    display:inline-block;
    width: 100%;
    img{
        width: 45%;
        height: 40vh;
    }
}
.ikki{
    margin-left: 100px;
}
`
export default Sect;