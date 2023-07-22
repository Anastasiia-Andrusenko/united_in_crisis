import { NavLink } from 'react-router-dom';
import css from './AppNav.module.css';

import LogoWhite from '../../img/logo/logo-wh.svg';

const AppNav = () => {
  const getClassName = ({ isActive }) => {
    return isActive ? `${css.link} ${css.current}` : css.link;
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <NavLink className={css.logo} to="/">
          <div className={css.logo_container}>
            <img src={LogoWhite} alt="logo" className={css.icon} />
            <p className={css.logo_text}>United in crisis</p>
          </div>
        </NavLink>
        <nav className={css.nav}>
          <NavLink className={getClassName} to="/about_us">
            What we do?
          </NavLink>
          <NavLink className={getClassName} to="/join_us">
            Join Us
          </NavLink>
          <NavLink className={getClassName} to="/contacts">
            Contacts
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default AppNav;
