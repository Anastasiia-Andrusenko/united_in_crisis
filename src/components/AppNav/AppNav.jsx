import { NavLink } from 'react-router-dom';
import css from './AppNav.module.css';

const AppNav = () => {
  const getClassName = ({ isActive }) => {
    return isActive ? `${css.link} ${css.current}` : css.link;
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <NavLink className={css.logo} to="/">
          Logo
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
