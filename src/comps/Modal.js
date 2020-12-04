import React from 'react';

const Modal = ({ selectedImg }) => {

    return (
        <div className='backdrop'>
            <img src={selectedImg} alt='Enlarged picture' />
        </div>
    )

}

export default Modal;