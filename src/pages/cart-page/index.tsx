import React from 'react';
import { Header } from '../../components';
import { CartPage as Cart } from '@tipser/tipser-elements';

export const CartPage: React.FC = () => {
 return (
  <div>
   <Header />
   <Cart />
  </div>
 );
};
