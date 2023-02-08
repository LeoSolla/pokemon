import React, { useRef, useState } from 'react';
import closeIcon from '../assets/images/close.png';

const Modal = ({ pokemon }) => {
    const [isOpen, setIsOpen] = useState(true);
    const modalRef = useRef(null);

    const handleClose = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.targeet)) {
            setIsOpen(false);
        }
    }

    if(!isOpen) {
        return null;
    }

return (
    <div className="modal" onClick={handleClose}>
        <div className="modal__content" ref={modalRef}>
            <img className="modal__close" src={closeIcon} alt="Fechar" onClick={handleClose}/>
            <div style={{ height: '30rem', width: '30rem' }}>
                <p>{pokemon[0].name}</p>
            </div>
        </div>
    </div>
    );
};

export default Modal;