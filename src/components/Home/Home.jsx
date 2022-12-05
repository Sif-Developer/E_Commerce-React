import React from 'react'
import { Carousel } from 'antd';
import "./Home.scss";
import home1 from "../../assets/images/home1.jpg"


function Home() {

  const contentStyle = {
    color: '#fff',
    textAlign: 'center',
    background: '#364d79'
  };

  return (
    
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}><img src={home1} className="productimg" alt="news"></img></h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    )
  
}

export default Home