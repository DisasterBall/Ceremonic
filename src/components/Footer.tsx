import React from 'react';
import styles from './css/footer.module.css'
import insta from '../assets/image/footer/insta.png'
import facebook from '../assets/image/footer/facebook.png'


function Footer () {


  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <div><img src={insta} alt="Instagram" className={styles.img_footer}/> ceremonic_ukraine</div>
        <div><img src={facebook} alt="Facebook" className={styles.img_footer}/> ceremonic_ukraine</div>
      </div>
      <div className={styles.right}>
        <p>Україна, м. Харків, проспект Науки 14 <br />
        +(380) 66 96 19 232</p>
        <p>@ 2023 CeremonicTEAM. <br /> 
        Усі права захищені.</p>
      </div>
    </div>
    
  );
}

export default Footer;
