
import React from "react"
import './App.css';
import Header from "./Components/header"
import Footer from "./Components/footer"
import Main from "./Components/main"
import Modal from './Components/modal'
import { useState } from 'react';

function App() {
  const [showLModal, setShowLModal]=useState(false);

const closeModal=()=>{
  return setShowLModal(false);
}
  return (
    <div>
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
                    <button className="m-3" onClick={()=> setShowLModal(true)}>Log in</button>
                    <button className="m-3">Sign up</button>
                </div>
            </div>
      </div>
      {showLModal && <Modal close={closeModal} />}
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
