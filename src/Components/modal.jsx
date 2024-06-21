import React from 'react'
import { Pointer, X } from 'lucide-react';
import { Mail } from 'lucide-react';
// import '../index.css';
function modal({close}) {
    return (
        <div onClick={close} className='modal-wrapper d-flex justify-content-center align-items-center vh-100'>
            <div class="modal-wrapper d-flex justify-content-center align-items-center vh-100">
                <div className='modal-container'>
                    <div className='modal-header'>
                        <h2 className=''>Login</h2>
                        <button className='cross'><X /></button>
                    </div>

                    <div className='class3'>
                        <form>
                            <input type="phone number" placeholder='Phone' required />
                            <button className='otp mt-3'>Send One Time Password</button>
                            <hr />
                            <button className='continue'><Mail style={{color:"rgb(239, 79, 95)"}}/>Continue with Email</button>
                        </form>
                        <p className='mt-5'>New to Zomato?<span style={{color:"rgb(239, 79, 95)", cursor:"pointer"}}>Create Account</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// import { X } from 'lucide-react'; // Ensure you import the X icon properly



// const Modal = () => {
//     return (
//         <div className='class1'>
//             <div className='class2'>
//                 <div className='cross'>
//                     <button className='text-white'><X /></button>
//                 </div>
//                 <form className='flex flex-col space-y-3 mt-4'>
//                     <input 
//                         type="number" 
//                         placeholder='Phone' 
//                         required 
//                         className='p-2 rounded bg-gray-800 text-white placeholder-gray-400'
//                     />
//                     <button 
//                         type='submit' 
//                         className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
//                     >
//                         Send One Time Password
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };







// import { X } from 'lucide-react'; // Ensure you import the X icon properly

// const Modal = () => {
//     return (
//         <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex text-center text-white'>
//             <div className='mt-5 flex flex-col bg-indigo-600 p-5 rounded-lg'>
//                 <button className='place-self-end'><X /></button>
//                 <form className='flex flex-col space-y-3'>
//                     <input 
//                         type="number" 
//                         placeholder='Phone' 
//                         required 
//                         className='p-2 rounded bg-gray-800 text-white placeholder-gray-400'
//                     />
//                     <button 
//                         type='submit' 
//                         className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
//                     >
//                         Send One Time Password
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };



export default modal;