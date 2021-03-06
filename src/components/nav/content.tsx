import React from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import NavLink from './link';

const Content: React.FC = () => {
  const dropdownRef = React.createRef<HTMLDivElement>();
  const { t } = useTranslation();

  const handleDropdown = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (dropdownRef.current?.classList.contains('navbar-dropdown')) {
      dropdownRef.current?.classList.replace(
        'navbar-dropdown',
        'navbar-dropdown--show',
      );
    } else {
      dropdownRef.current?.classList.replace(
        'navbar-dropdown--show',
        'navbar-dropdown',
      );
    }
  };

  const handleLogout = (event: React.SyntheticEvent) => {
    event.preventDefault();
    localStorage.removeItem('BEMS_USER');
    sessionStorage.removeItem('BEMS_USER');
    window.location.replace('/login');
  };

  return (
    <div className="navbar-content">
      {/**
       * Button for display Dropdown Menu
       */}
      <div
        className="navbar-button"
        onClick={handleDropdown}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        <FaAlignJustify />
      </div>
      {/**
       * Dropdown Menu
       */}
      <div ref={dropdownRef} className="navbar-dropdown">
        <NavLink pathname="/" imgName="home_icon" name={t('navbar.home')} />
        <NavLink
          pathname="/bidding"
          imgName="b_icon"
          name={t('navbar.bidding')}
        />
        <NavLink
          pathname="/status"
          imgName="bs_icon"
          name={t('navbar.status')}
        />
        <NavLink
          pathname="/power_info"
          imgName="flash_icon"
          name={t('navbar.powerInfo')}
        />
        <NavLink
          pathname="/setting"
          imgName="setting_icon"
          name={t('navbar.setting')}
        />
        <NavLink
          onLogout={handleLogout}
          imgName="logout_icon"
          name={t('navbar.logout')}
        />
      </div>
    </div>
  );
};

export default Content;
