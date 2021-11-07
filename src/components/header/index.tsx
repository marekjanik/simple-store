import React from 'react';
import { Link } from 'react-router-dom';
import { useComponent } from './useComponent';
import styles from './styles.module.scss';
import { CartPopup } from '..';
import { CartIcon } from '@tipser/tipser-elements';
import { menu_data, MenuItem } from '../../common';
import { FontAwesomeIcon, faBars } from '../../utils';

export const Header: React.FC = () => {
 const { isClicked, onClick, onCloseMobileMenu } = useComponent();

 let headerMenuStyles;
 if (!isClicked) {
  headerMenuStyles = styles.header__menu;
 }
 if (isClicked) {
  headerMenuStyles = `${styles.header__menu} ${styles['header__menu--active']}`;
 }

 return (
  <header className={styles.header}>
   <nav className={styles.header__navigation}>
    <Link to="/" className={styles.header__logo}>
     <h1>simple</h1>
    </Link>
    <ul className={headerMenuStyles}>
     {renderMenu(menu_data, onCloseMobileMenu)}
    </ul>
    <div className={styles.header__panel}>
     <FontAwesomeIcon
      icon={faBars}
      onClick={onClick}
      className={styles.header__bars}
     />
     <CartIcon className={styles.header__cart} />
     <div className={styles.header__popup}>
      <CartPopup />
     </div>
    </div>
   </nav>
  </header>
 );
};

const renderMenu = (
 menuData: MenuItem[],
 onCloseMobileMenu: VoidFunction
): JSX.Element[] => {
 return menuData.map((item) => (
  <li key={item.id} onClick={onCloseMobileMenu}>
   <Link to={item.url} className={styles.header__link}>
    {item.title}
   </Link>
  </li>
 ));
};
