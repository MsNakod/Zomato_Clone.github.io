import React from 'react'
import Nights from "./NightLifeArray";
import { useState } from "react";
import Cards from "./newCard";
function ThirdComp() {
    const [fdata, setFdata] = useState(Nights);
    return (
        <>

            <div className="container mt-3">
                <h3>Trending dining out restaurants</h3>
                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    <Cards data={fdata} />
                </div>
            </div>
            {/* <h1>hello</h1> */}
        </>
    )
}

export default ThirdComp;