import React from 'react';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';
import Ash from '../../components/Ash';

const MapPage = () => {

    return (
        <>
            <div className="map">
                <Sidebar />
                <Modal>
                    <div style={{ height: '30rem', width: '30rem' }} />
                </Modal>
                <Ash />
            </div>
        </>
    );
};

export default MapPage;
