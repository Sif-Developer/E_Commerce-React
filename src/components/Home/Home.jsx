import React from 'react'
import { Carousel } from 'antd';
import "./Home.scss";
import home1 from "../../assets/images/home1.jpg"
import games from "../../assets/images/games.png"
import console from "../../assets/images/consolashome.jpg"

function Home() {

  const contentStyle = {
    color: '#fff',
    textAlign: 'center',
    background: '#364d79'
  };

  return (

    <div className='Home'>

      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}><img src={home1} className="producthome" alt="console"></img></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src={games} className="producthome" alt="games"></img></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src={console} className="producthome" alt="games"></img></h3>
        </div>
      </Carousel>
      </div>
    )
  
}

export default Home