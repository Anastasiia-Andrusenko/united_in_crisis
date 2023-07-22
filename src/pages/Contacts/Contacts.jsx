import css from './Contacts.module.css';

import Cascais from '../../img/location.jpg';
import Lisboa from '../../img/location2.jpg';

import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail.esm';
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram.esm';
import { AiOutlineFacebook } from '@react-icons/all-files/ai/AiOutlineFacebook.esm';

const ContactsPage = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Where we are</h2>
      <div className={css.locations}>
        <ul className={css.list}>
          <li className={css.item}>
              <iframe 
                className={css.map}
                title="2750-412 Cascais" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.9879235092894!2d-9.422983222975878!3d38.695121671767964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec428dc1c9037%3A0x18ff353547b607bb!2zUi4gTHXDrXMgWGF2aWVyIFBhbG1laXJpbSA0LCAyNzUwLTQxMiBDYXNjYWlzLCDQn9C-0YDRgtGD0pHQsNC70ZbRjw!5e0!3m2!1suk!2sua!4v1690061275891!5m2!1suk!2sua" 
                width="560" 
                height="450" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
              <div className={css.thumb}>
                <img src={Cascais} alt='Cascais location' width="560" height="450" className={css.img}/>
                <div className={css.thumb_overlay}>
                  <p className={css.text}>
                    R. Luís Xavier Palmeirim 4 <br/>
                    2750-412 <br/>
                    Cascais, Portugal
                  </p>
                </div>
              </div>
          </li>
          <li className={css.item}>
              <div className={css.thumb}>
                <img src={Lisboa} alt='Cascais location' width="560" height="450" className={css.img}/>
                <div className={css.thumb_overlay}>
                  <p className={css.text}>
                    Goethe-Institut Lisboa <br/>
                    <span className={css.street}>Campo dos Mártires da Pátria 37</span><br/>
                    1169-016 <br/>
                    Lisboa, Portugal
                  </p>
                </div>
              </div>
              <iframe 
                className={css.map}
                title="2750-412 Cascais" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1556.4275330149658!2d-9.140580600000002!3d38.7211364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193383783339bb%3A0x764dd0e49f1c80cd!2sGoethe-Institut%20Lisboa!5e0!3m2!1suk!2sua!4v1690063972932!5m2!1suk!2sua" 
                width="560" 
                height="450" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
          </li>
        </ul>
      </div>
      <h2 className={css.title}>Let's get in touch</h2>
      <div className={css.container_social}>
        <ul className={css.social_list}>
        <li className={css.social_item}>
            <a
              href="mailto:info@unitedincrisis.com"
              className={css.social_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMail className={css.icon} />
              <p>email</p>
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
              <p>instagram</p>
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
              <p>facebook</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactsPage;

