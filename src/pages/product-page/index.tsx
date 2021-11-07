import React from 'react';
import { useParams } from 'react-router';
import styles from './styles.module.scss';
import { Header, CustomProductModule } from '../../components';
import { ModularProduct } from '@tipser/tipser-elements';

export const ProductPage: React.FC = () => {
 const { productId } = useParams<{ productId: string }>();

 return (
  <div className={styles.container}>
   <Header />
   <ModularProduct productId={productId}>
    <CustomProductModule />
   </ModularProduct>
  </div>
 );
};
