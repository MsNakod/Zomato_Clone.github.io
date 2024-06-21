import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function NightLifeComponent() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
        <>
            <section style={{ backgroundColor: "brown" }}>
                <div className='container'>
                    <div className='pt-3 head'>
                        <h2>Inspiration for your first order</h2>
                    </div>
                    <Slider {...settings} className='mt-5'>
                        <div className=' p-2' >
                            <div className='' style={{ borderRadius: "0.6rem" }}>
                                <img className='trend' src="https://b.zmtcdn.com/data/collections/96541881ed7b42d424990403ac3afdbf_1712923153.png" alt="" />
                            </div>
                        </div>
                        <div className='p-2'>
                            <div className='para' style={{ borderRadius: "0.6rem" }}>
                                <img className='trend' src="https://b.zmtcdn.com/data/collections/908aad87392ba1f9526e7b483b94d124_1711107868.jpg" alt="" />
                            </div>
                        </div>
                        <div className='p-2'>
                            <div className='para' style={{ borderRadius: "0.6rem" }}>
                                <img className='trend' src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png" alt="" />
                            </div>
                        </div>
                        <div className='p-2'>
                            <div className='para' style={{ borderRadius: "0.6rem" }}>
                                <img className='trend' src="https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709810606.png" alt="" />
                            </div>
                        </div>
                        <div className='p-2'>
                            <div className='para' style={{ borderRadius: "0.6rem" }}>
                                <img className='trend' src="https://b.zmtcdn.com/data/collections/2e8b954961d07f927802853d5944d67b_1709812770.png" alt="" />
                            </div>
                        </div>
                        <div className='p-2'>
                            <div className='para' style={{ borderRadius: "0.6rem" }}>
                                <img className='trend' src="https://b.zmtcdn.com/data/collections/fbd237478a5d3b6ea08de83c30230cdd_1709811730.png" alt="" />
                            </div>
                        </div>
                        <div className='p-2'>
                            <div className='para' style={{ borderRadius: "0.6rem" }}>
                                <img className='trend' src="https://b.zmtcdn.com/data/collections/b002ac3dedef51dd605505656450b099_1696922552.jpg" alt="" />
                            </div>
                        </div>
                        <div className='p-2'>
                            <div className='para' style={{ borderRadius: "0.6rem" }}>
                                <img className='trend' src="	https://b.zmtcdn.com/data/collections/ce8f94a179d859d01f94c441d67ef5ad_1706256877.png" alt="" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}
