import css from './JoinUs.module.css';

// import Footer from '../../components/Footer/Footer';

const JoinUsPage = () => {
  return (
    <>
      <div className={css.container}>
      <h2 className={css.title}>We invite everyone to support our club</h2>
      <p className={css.head}>If you are a professional in your field, come share your knowledge and experience at our open lectures. We are also looking for psychologists, teachers, animators etc.</p>
      <div className={css.section}>
        <div className={css.img}></div>
        <div>
          <ul className={css.list}>
            <li className={css.item}>
              <a href='https://docs.google.com/forms/d/1882DdEH84WkDUnljrwErmvTEwJ-gre6gNlElnLYv0sc/edit?hl=uk' 
              className={css.link}
              target="_blank"
              rel="noopener noreferrer"> 
              Psychologists
              </a>
            </li>
            <li className={css.item}>
              <a href='https://docs.google.com/forms/d/1882DdEH84WkDUnljrwErmvTEwJ-gre6gNlElnLYv0sc/edit?hl=uk' 
              className={css.link}
              target="_blank"
              rel="noopener noreferrer"> 
              Therapists
              </a>
            </li>
            <li className={css.item}>
              <a href='https://docs.google.com/forms/d/1882DdEH84WkDUnljrwErmvTEwJ-gre6gNlElnLYv0sc/edit?hl=uk' 
              className={css.link}
              target="_blank"
              rel="noopener noreferrer"> 
              Teachers
              </a>
            </li>
            <li className={css.item}>
              <a href='https://docs.google.com/forms/d/1882DdEH84WkDUnljrwErmvTEwJ-gre6gNlElnLYv0sc/edit?hl=uk' 
              className={css.link}
              target="_blank"
              rel="noopener noreferrer"> 
              Students
              </a>
            </li>
            <li className={css.item}>
              <a href='https://docs.google.com/forms/d/1882DdEH84WkDUnljrwErmvTEwJ-gre6gNlElnLYv0sc/edit?hl=uk' 
              className={css.link}
              target="_blank"
              rel="noopener noreferrer"> 
              Translators
              </a>
            </li>
            <li className={css.item}>
              <a href='https://docs.google.com/forms/d/1882DdEH84WkDUnljrwErmvTEwJ-gre6gNlElnLYv0sc/edit?hl=uk' 
              className={css.link}
              target="_blank"
              rel="noopener noreferrer"> 
              Specialists
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default JoinUsPage;
