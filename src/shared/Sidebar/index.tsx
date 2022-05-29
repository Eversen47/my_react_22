import React from 'react';
import style from './Sidebar.module.scss';
import { sidebarConfig } from './sidebarConfig';

const Sidebar = () => {
  return (
    <div className={style.sidebar_wrapper}>
      <ul className={style.sidebar_menu}>
        {sidebarConfig.map((menuItem) => {
          return (
            <li key={menuItem.id} className={style.sidebar_menu_item}>
              {menuItem.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
