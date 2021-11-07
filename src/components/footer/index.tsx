import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import {
 FontAwesomeIcon,
 faFacebookSquare,
 faInstagramSquare,
 faTwitterSquare,
 faPhoneAlt
} from '../../utils';

export const Footer: React.FC = () => {
 return (
  <footer className={styles.footer}>
   <div className={styles.footer__socials}>
    <FontAwesomeIcon
     icon={faFacebookSquare}
     className={styles.footer__facebook}
    />
    <FontAwesomeIcon
     icon={faInstagramSquare}
     className={styles.footer__instagram}
    />
    <FontAwesomeIcon
     icon={faTwitterSquare}
     className={styles.footer__twitter}
    />
   </div>
   <nav className={styles.footer__navigation}>
    <Link to="/" className={styles.footer__link}>
     About Us
    </Link>
    <Link to="/" className={styles.footer__link}>
     Delivery
    </Link>
    <Link to="/" className={styles.footer__link}>
     Privacy Policy
    </Link>
   </nav>
   <div className={styles.footer__contact}>
    <FontAwesomeIcon icon={faPhoneAlt} />
    <span className={styles.footer__phone}> 000-000-0000</span>
   </div>
  </footer>
 );
};
