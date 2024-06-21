import React from "react";
import LoginComponent from "./LoginComponent";
import Modal from './modal'
function Header() {

    /*     const [selectedOption, setSelectedOption] = useState(null);
    
      const handleOptionClick = (option) => {
        setSelectedOption(option); */

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className="d-flex">
                        <h2 className="p-3 app-name">Zomato</h2>
                        <div className="search p-3 text-center">
                            <input type="text" placeholder='Search for restaurant, cuisine or a dish '></input>
                        </div>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-end h-buttons">
                    <button className="m-3">Log in</button>
                    <button className="m-3">Sign up</button>
                </div>
            </div>
            
            {/* <div className="row m-3">
                <div className="col-3 d-flex">
                    <img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp" style={{height:"50px",width:"50px"}} onClick={() => handleOptionClick("dining")} alt="" />
                    <h4 className="text-center m-2">Dining Out</h4>
                </div>
                <div className="col-3 d-flex">
                    <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=web" style={{height:"50px",width:"50px"}} onClick={() => handleOptionClick("delivery")} alt="" />
                    <h4 className="text-center m-2">Delivery</h4>
                </div>
                <div className="col-3 d-flex">
                    <img src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png" style={{height:"50px",width:"50px"}} onClick={() => handleOptionClick("nightlife")} alt="" />
                    <h4 className="text-center m-2">Nightlife</h4>
                </div>
            </div>

            {selectedOption === "dining" && <DiningOutComponent />}
            {selectedOption === "delivery" && <DeliveryComponent />}
            {selectedOption === "nightlife" && <NightlifeComponent />} */}
        </div>
        
        </>
    );
}

export default Header;