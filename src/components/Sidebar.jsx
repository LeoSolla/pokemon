import React from 'react';
import Button from './Button';
import plusIcon from '../assets/images/plus.png';

const SidebarItem = () => {
    return <div className="sidebar__item">?</div>;
  };

const Sidebar = () => {
    const items = [1, 2, 3, 4, 5, 6];
    return (
        <div className="sidebar">
            {items.map((item) => (
                <SidebarItem key={item} />
            ))}
            <Button
                icon={<img src={plusIcon} alt="+" />}
            />
        </div>
    );
};

export default Sidebar;
