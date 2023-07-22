import { Slide } from 'react-slideshow-image';

import css from './Gallery.module.css';
import '../../../../node_modules/react-slideshow-image/dist/styles.css';

import img1 from '../../../img/img/1.jpg';
import img2 from '../../../img/img/2.jpg';
import img3 from '../../../img/img/3.jpg';
import img4 from '../../../img/img/4.jpg';
import img5 from '../../../img/img/5.jpg';
import img6 from '../../../img/img/6.jpg';
import img7 from '../../../img/img/7.jpg';
import img8 from '../../../img/img/8.jpg';
import img9 from '../../../img/img/9.jpg';
import img10 from '../../../img/img/10.jpg';

const proprieties = {
  duration: 3500,
  transitionDuration: 600,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Gallery = () => {
  return (
    <div className={css.container}>
      <Slide {...proprieties}>
        <div className={css.each_slide}>
          <div >
            <img src={img1} alt="img1" width="800" height="auto" className={css.img}/>
          </div>
        </div>
        <div className={css.each_slide}>
          <div>
            <img src={img2} alt="img2" width="800" height="auto" className={css.img}/>
          </div>
        </div>
        <div className={css.each_slide}>
          <div>
            <img src={img3} alt="img3" width="800" height="auto" className={css.img}/>
          </div>
        </div>
        <div className={css.each_slide}>
          <div>
            <img src={img4} alt="img3" width="800" height="auto" className={css.img}/>
          </div>
        </div>
        <div className={css.each_slide}>
          <div>
            <img src={img5} alt="img3" width="800" height="auto" className={css.img}/>
          </div>
        </div>
        <div className={css.each_slide}>
          <div>
            <img src={img6} alt="img3" width="800" height="auto" className={css.img}/>
          </div>
        </div>
        <div className={css.each_slide}>
          <div>
            <img src={img7} alt="img3" width="800" height="auto" className={css.img}/>
          </div>
        </div>
        <div className={css.each_slide}>
          <div>
            <img src={img8} alt="img3" width="800" height="auto" className={css.img}/>
          </div>
        </div>
        <div className={css.each_slide}>
          <div>
            <img src={img9} alt="img3" width="800" height="auto" className={css.img}/>
          </div>
        </div>
        <div className={css.each_slide}>
          <div>
            <img src={img10} alt="img3" width="800" height="auto" className={css.img}/>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Gallery;