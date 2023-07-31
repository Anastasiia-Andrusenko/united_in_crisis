import css from './Hero.module.css';

import Logo from '../../../img/logo/logo-wh.svg';

const Hero = () => {
  return (
    <section className={css.container}>
      <h1 className={css.title}>United in Crisis</h1>
      <p className={css.slogan}>Some very tearful slogan.</p>
      <div>
        <img src={Logo} alt="logo" className={css.logo} />
      </div>
    </section>
  );
};

export default Hero;
