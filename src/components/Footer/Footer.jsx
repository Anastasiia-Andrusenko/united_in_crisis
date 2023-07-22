import { NavLink } from 'react-router-dom';
import css from './Footer.module.css';

import LogoWhite from '../../img/logo/logo-wh.svg';

import { IoLocationSharp } from '@react-icons/all-files/io5/IoLocationSharp.esm';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail.esm';
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram.esm';
import { AiOutlineFacebook } from '@react-icons/all-files/ai/AiOutlineFacebook.esm';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.logo_container}>
          <img src={LogoWhite} alt="logo" className={css.logo} />
        </div>
        <ul className={css.address_list}>
          <li className={css.address_item}>
            <address className={css.address}>
              <div>
                <IoLocationSharp className={css.icon_location} />
              </div>
              <p className={css.text}>
                R. Luís Xavier Palmeirim 4, <br />
                2750-412 Cascais, Portugal
              </p>
            </address>
          </li>
          <li className={css.address_item}>
            <address className={css.address}>
              <div>
                <IoLocationSharp className={css.icon_location} />
              </div>
              <p className={css.text}>
                Goethe-Institut Lisboa, <br />
                Campo dos Mártires da Pátria 37, 1169-016 Lisboa, Portugal
              </p>
            </address>
          </li>
        </ul>
        <ul className={css.social_list}>
          <li className={css.social_item}>
            <a
              href="mailto:info@unitedincrisis.com"
              className={css.social_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMail className={css.icon} />
            </a>
          </li>
          <li className={css.social_item}>
            <a
              href="https://www.instagram.com/united_in_crisis/"
              className={css.social_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram className={css.icon} />
            </a>
          </li>
          <li className={css.social_item}>
            <a
              href="https://www.facebook.com/profile.php?id=100087447165504"
              className={css.social_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFacebook className={css.icon} />
            </a>
          </li>
        </ul>
        <div className={css.btn}>
          <NavLink className={css.link} to="/join_us">
            Join Us
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
