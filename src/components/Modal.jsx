import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/images/close.png';

const Modal = ({ children }) => {
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
            {children}
        </div>
    </div>
    );
};


Modal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Modal;
