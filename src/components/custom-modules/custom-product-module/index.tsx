import React from 'react';
import styles from './styles.module.scss';
import {
 ProductImage,
 ProductTitle,
 ProductPrice,
 ProductVariantSelector,
 ProductAvailabilityInfo,
 ProductBuyButton,
 ProductDescription
} from '@tipser/tipser-elements';

export const CustomProductModule: React.FC = () => {
 return (
  <div className={styles.product}>
   <div className={styles.product__top}>
    <div className={styles.product__image}>
     <ProductImage
      enableArrows={true}
      enableSwipe={true}
      className={styles.ProductImage}
     />
    </div>
    <div className={styles.product__info}>
     <ProductTitle className={styles.ProductTitle} />
     <ProductPrice className={styles.ProductPrice} />
     <ProductVariantSelector className={styles.ProductVariantSelector} />
     <ProductAvailabilityInfo className={styles.ProductAvailabilityInfo} />
     <ProductBuyButton className={styles.ProductBuyButton} />
    </div>
   </div>
   <div className={styles.product__bottom}>
    <ProductDescription />
   </div>
  </div>
 );
};
