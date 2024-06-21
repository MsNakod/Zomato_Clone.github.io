import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function firstComp() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2
  };
  return (
    <>
      <section style={{ backgroundColor: "black" }}>
        <div className='container'>
          <div className='pt-3 head'>
            <h2>Inspiration for your first order</h2>
          </div>
          <Slider {...settings}>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"white"}}>Pizza</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="	https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"white"}}>Biryani</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"white"}}>Thali</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"white"}}>Chicken</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="	https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"white"}}>Fried Rice</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"white"}}>Rolls</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"white"}}>North Indian</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"white"}}>Cake</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"white"}}>Paneer</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"white"}}>Dosa</p>
              </div>
            </div>
            <div className='common mt-5'>
              <div className='para'>
                <img className='' src="https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png" alt="" />
              </div>
              <div className='para m-2'>
                <p className='text-center' style={{color:"white"}}>Paratha</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  )
}
