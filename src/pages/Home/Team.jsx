import css from './Team.module.css';

import DefaultAva from '../../img/team/def-ava.jpg';

const Team = () => {
  return (
    <>
      <section className={css.container}>
        <h2 className={css.title}>Our team</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <div className={css.avatar}>
              <img src={DefaultAva} alt="avatar" className={css.img} />
            </div>
            <div className={css.info}>
              <p className={css.name}>Magdalena Kishizawa</p>
              <p className={css.description}>
                psychologist with 20 years of experience working with people
                from different cultures.
              </p>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.avatar}>
              <img src={DefaultAva} alt="avatar" className={css.img} />
            </div>
            <div className={css.info}>
              <p className={css.name}>Katarzyna Akhtar</p>
              <p className={css.description}>
                psychotherapist with over eighteen years of experience working
                with individuals and groups in a variety of mental health
                settings.
              </p>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.avatar}>
              <img src={DefaultAva} alt="avatar" className={css.img} />
            </div>
            <div className={css.info}>
              <p className={css.name}>Alevtyna Sereda</p>
              <p className={css.description}>
                psychologist and groups leader from Kyiv. Working with Ukrainian
                people online and face to face in Lisbon.
              </p>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.avatar}>
              <img src={DefaultAva} alt="avatar" className={css.img} />
            </div>
            <div className={css.info}>
              <p className={css.name}>Zuzanna Olejnik</p>
              <p className={css.description}>
                psychologist from Poland, social media assistant.
              </p>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.avatar}>
              <img src={DefaultAva} alt="avatar" className={css.img} />
            </div>
            <div className={css.info}>
              <p className={css.name}>Hanna Osipova</p>
              <p className={css.description}>
                psychologist with 5 years of experience, life motto: even small
                steps leads to huge changes.
              </p>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.avatar}>
              <img src={DefaultAva} alt="avatar" className={css.img} />
            </div>
            <div className={css.info}>
              <p className={css.name}>Nadia Pozharska</p>
              <p className={css.description}>
                project manager, artist and happy mom from Kyiv.
              </p>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.avatar}>
              <img src={DefaultAva} alt="avatar" className={css.img} />
            </div>
            <div className={css.info}>
              <p className={css.name}>Lisa Metsamaa</p>
              <p className={css.description}>
                Music Therapist working with both adults and children with a
                range of difficulties. 4+ years experience working in the United
                Kingdom and in Portugal.
              </p>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.avatar}>
              <img src={DefaultAva} alt="avatar" className={css.img} />
            </div>
            <div className={css.info}>
              <p className={css.name}>Gillian Scadden</p>
              <p className={css.description}>
                Expressive Arts Psychotherapist, Trauma Counsellor and
                Humanitarian Advocate for your people with 10+ years experience.
              </p>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.avatar}>
              <img src={DefaultAva} alt="avatar" className={css.img} />
            </div>
            <div className={css.info}>
              <p className={css.name}>Daryna Talda</p>
              <p className={css.description}>
                volunteer from Ukraine, lawyer by education , living for 2.5
                years in Portugal.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Team;
