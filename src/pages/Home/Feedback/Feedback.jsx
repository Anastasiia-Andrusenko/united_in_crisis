import { Slide } from 'react-slideshow-image';

import css from './Feedback.module.css';
import '../../../../node_modules/react-slideshow-image/dist/styles.css';

const proprieties = {
  duration: 6000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Feedback = () => {
  return (
    <div className={css.container}>
      <Slide {...proprieties}>
        <div className={css.each_slide}>
          <div>
            <div className={css.feedback}>
              <p className={css.text}>
                "We had so much fun last weekend with UIC."
              </p>
              <p className={css.name}>Jackson Davis</p>
            </div>
          </div>
        </div>
        <div className={css.each_slide}>
        <div>
            <div className={css.feedback}>
              <p className={css.text}>
                "I call it my home, thank you for the help..."
              </p>
              <p className={css.name}>Casper Berkley</p>
            </div>
          </div>
        </div>
        <div className={css.each_slide}>
          <div>
            <div className={css.feedback}>
            
              <p className={css.text}>
                "My son adores art classes and finally I can have some time for me and my friends."
              </p>
              <p className={css.name}>Marie Schwaiger</p>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Feedback;
