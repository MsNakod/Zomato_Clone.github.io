import React from 'react'
import Modal from './modal'
function LoginComponent() {
    return (
        <>
            <div className="col-4 d-flex justify-content-end h-buttons">
                <button className="m-3">Log in</button>
                <button className="m-3">Sign up</button>
            </div>
            <Modal/>
        </>
    )
}

export default LoginComponent;