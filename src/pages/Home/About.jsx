import css from './About.module.css';
import classNames from 'classnames';

import TeamPhoto from '../../img/team/IMG_8288.jpg';

const About = () => {
  return (
    <section className={css.container}>
      <img src={TeamPhoto} alt="team" className={css.photo} />
      <ul className={css.list}>
        <li className={css.item}>
          <h2 className={css.title}>We are</h2>
          <p className={css.text}>
            international team of volunteers united to help Ukrainians adapt to
            a new life away from home.
          </p>
        </li>
        <li className={classNames(css.item, css.bottom)}>
          <h2 className={css.title}>Our goal</h2>
          <p className={css.text}>
            is to create a comfortable and safe space where Ukrainians can meet,
            share experiences, have fun, and communicate in their own
            environment.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default About;
