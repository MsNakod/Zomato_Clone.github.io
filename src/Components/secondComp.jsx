import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function secondComp() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2
  };
  return (
    <>
      <section className='mt-5' style={{ backgroundColor: "white" }}>
        <div className='container'>
          <div className='pt-3 head'>
            <h2 style={{ color: "black" }}>Top brands for you</h2>
          </div>
          <Slider {...settings}>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611377090.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"black", fontWeight:"bold"}}>McDonald's</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252811.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"black", fontWeight:"bold"}}>Domino's Pizza</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="	https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188299.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"black", fontWeight:"bold"}}>Burger King</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="https://b.zmtcdn.com/data/brand_creatives/logos/0586860837a45545296c0c4306d260f2_1491906156.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"black", fontWeight:"bold"}}>Sujata Mastani</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="	https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613215152.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"black", fontWeight:"bold"}}>KFC</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="https://b.zmtcdn.com/data/brand_creatives/logos/82b5b6321860545a160e790d99ec6da3_1629438503.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"black", fontWeight:"bold"}}>Non-veg</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="	https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"black", fontWeight:"bold"}}>Pizza Hut</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="	https://b.zmtcdn.com/data/brand_creatives/logos/5a27a3f43344ecdb49c575d0284ebc40_1629438578.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"black", fontWeight:"bold"}}>Rolls Mania</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="	https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471832.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"black", fontWeight:"bold"}}>Subway</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  )
}
