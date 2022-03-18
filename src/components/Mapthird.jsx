import React,{useContext} from 'react'
import styled from 'styled-components';
// import data from '../objects/Data';
import Slider from "react-slick";
import {Context} from '../context'

const Mapthird = () => {
  const {dataSearch}=useContext(Context)
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  
  return (
    <Third>
        <div className="container">
        <div id='row' className="row">
    <Slider {...settings}>
        {dataSearch.slice(12,18).map((el,id) => {
            return(
                <div key={id} id="col" className='col-lg-2'>
                    <p>{el.package}</p>
                    <img src={el.image} alt="" />
                  <div className="d-flex">
                  <div className="texts">
                   <h6>{el.cost}</h6>
                    <h6>{el.cash}</h6>
                   </div>
                    
        <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
        </div>
                  </div>
        <p>{el.und}</p>
                </div>      
            )
    })}
    </Slider>
    </div>
        </div>
    </Third>
  )
}
const Third = styled.div`
p{
    color: #066FFE;
    font-weight: 600;
}
h6{
    color: gray;
    font-weight: 600;
}
p,h6{
    text-align: left;
    padding-left: 10px;
}
#col{
    margin-top: 50px;
    width: 130px;
    text-align: center;
    margin-bottom: 30px;
    
}
#col:hover{
    border: 3px solid #E2EEEE;
}
#col img{
    width: 80%;
    margin: 0 auto;
    padding: 0 auto;
}
.icon{
  padding-top: 25px;
  padding-left: 20px;
  svg{
    border-radius: 15px;
  }
}
aside{
  text-align: left;
  h1{
      margin-top: 50px;
      margin-bottom: 30px;
  }
}
`
export default Mapthird;