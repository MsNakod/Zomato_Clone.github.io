import React from "react";
import Fooddata from "./DiningArray";
import { useState } from "react";
import Cards from "./cards";
import Slider from "react-slick";
const DiningOutComponent = () => {
    const [fdata, setFdata] = useState(Fooddata);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
        <div>
            {/* <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Collections</h2>
                        <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends</p>
                    </div>
                    <div className="col-12">
                        <div className="owl-carousel slider_carousel">
                            <div className="card_box">
                                <img src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" style={{ height: "200px", width: "200px" }} alt="" />
                            </div>
                            <div className="card_box">
                                <img src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" style={{ height: "200px", width: "200px" }} alt="" />
                            </div>
                            <div className="card_box">
                                <img src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" style={{ height: "200px", width: "200px" }} alt="" />
                            </div>
                            <div className="card_box">
                                <img src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" style={{ height: "200px", width: "200px" }} alt="" />
                            </div>
                            <div className="card_box">
                                <img src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" style={{ height: "200px", width: "200px" }} alt="" />
                            </div>
                            <div className="card_box">
                                <img src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" style={{ height: "200px", width: "200px" }} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row d-flex">
                    <div className="col-3 p-2 text-center">
                        <img src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" style={{height:"200px",width:"200px"}} alt="" />
                    </div>
                    <div className="col-3 p-2 text-center">
                        <img src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" style={{height:"200px",width:"200px"}} alt="" />
                    </div>
                    <div className="col-3 p-2 text-center">
                        <img src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" style={{height:"200px",width:"200px"}} alt="" />
                    </div>
                    <div className="col-3 p-2 text-center">
                        <img src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" style={{height:"200px",width:"200px"}} alt="" />
                    </div>
                    <div className="col-3 p-2 text-center">
                        <img src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" style={{height:"200px",width:"200px"}} alt="" />
                    </div>
                </div>
            </div> */}

            <section class="card_wrapper" style={{ backgroundColor: "silver" }}>
                <div class="container">
                    <div class="row">
                        <div className="col-12 mt-3">
                            <h2>Collections</h2>
                            <p className="mt-3">Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends</p>
                        </div>
                    </div>

                    <Slider {...settings} className='mt-5 '>

                        <div className="card_box m-3">
                            <img className="img-fluid p-2" src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" alt="" />
                            <div className="card_text">
                                <h4>Profile ID: 23456</h4>
                                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                            </div>
                        </div>
                        <div className="card_box m-3">
                            <img className="img-fluid p-2" src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" alt="" />
                            <div className="card_text">
                                <h4>Profile ID: 23456</h4>
                                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                            </div>
                        </div>
                        <div className="card_box m-3">
                            <img className="img-fluid" src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" alt="" />
                            <div className="card_text">
                                <h4>Profile ID: 23456</h4>
                                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                            </div>
                        </div>
                        <div className="card_box m-3">
                            <img className="img-fluid" src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" alt="" />
                            <div className="card_text">
                                <h4>Profile ID: 23456</h4>
                                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                            </div>
                        </div>
                        <div className="card_box m-3">
                            <img className="img-fluid" src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" alt="" />
                            <div className="card_text">
                                <h4>Profile ID: 23456</h4>
                                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                            </div>
                        </div>
                        <div className="card_box m-3">
                            <img className="img-fluid" src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" alt="" />
                            <div className="card_text">
                                <h4>Profile ID: 23456</h4>
                                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                            </div>
                        </div>
                        <div className="card_box m-3">
                            <img className="img-fluid " src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" alt="" />
                            <div className="card_text">
                                <h4>Profile ID: 23456</h4>
                                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                            </div>
                        </div>
                        <div className="card_box m-3">
                            <img className="img-fluid" src="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811212.png?output-format=webp" alt="" />
                            <div className="card_text">
                                <h4>Profile ID: 23456</h4>
                                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                            </div>
                        </div>
                    </Slider>
                </div >
            </section >

    <div className="container mt-3">
        <h3>Trending dining out restaurants</h3>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
            <Cards data={fdata} />
        </div>
    </div>

        </div >
    );
}
export default DiningOutComponent;