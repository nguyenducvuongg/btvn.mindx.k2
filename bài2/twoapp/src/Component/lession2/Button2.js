import React from 'react';
import './Button2.css'
import { useState } from 'react';
import Modal from '../lession3/Modal';
const Button2 = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
    return (
        <div className='btn-container'>
            <button className='btn btn-right' onClick={openModal}> 
            Buy Tickets
            </button>
            <button className='btn btn-left' onClick={openModal}>
                Get Free
            </button>
            {showModal && <Modal close={closeModal}/>}
        </div>
    );
};

export default Button2;