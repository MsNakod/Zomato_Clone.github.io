import React from "react";
import { useState, useEffect } from "react";
import DiningOutComponent from "./DiningOutComponent";
import DeliveryComponent from "./DeliveryComponent";
import NightlifeComponent from "./NightlifeComponent";
function Main() {

    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        // Retrieve the selected option from local storage
        const storedOption = localStorage.getItem('selectedOption');
        if (storedOption) {
            setSelectedOption(storedOption);
        } else {
            // Set a default option if none is stored
            setSelectedOption("dining");
        }
    }, []);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        localStorage.setItem('selectedOption', option);
    };

    return (
        <div>
            <div className="container">
                <div className="row m-3">
                    <div className={`col-3 d-flex ${selectedOption === "dining" ? "selected" : ""}`} onClick={() => handleOptionClick("dining")}>
                        <img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp" style={{ height: "50px", width: "50px" }} alt="" />
                        <h4 className="text-center m-2">Dining Out</h4>
                    </div>
                    <div className={`col-3 d-flex ${selectedOption === "delivery" ? "selected" : ""}`} onClick={() => handleOptionClick("delivery")}>
                        <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=web" style={{ height: "50px", width: "50px" }} alt="" />
                        <h4 className="text-center m-2">Delivery</h4>
                    </div>
                    <div className={`col-3 d-flex ${selectedOption === "nightlife" ? "selected" : ""}`} onClick={() => handleOptionClick("nightlife")}>
                        <img className="" src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png" style={{ height: "50px", width: "50px" }} alt="" />
                        <h4 className="text-center p-3 m-2">Nightlife</h4>
                    </div>
                </div>
            </div>

            {selectedOption === "dining" && <DiningOutComponent />}
            {selectedOption === "delivery" && <DeliveryComponent />}
            {selectedOption === "nightlife" && <NightlifeComponent />}

        </div>
    );
}

export default Main;