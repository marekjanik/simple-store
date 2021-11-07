import React from 'react';
import { Header } from '../../components';
import { CheckoutPage as Checkout } from '@tipser/tipser-elements';

export const CheckoutPage: React.FC = () => {
 return (
  <div>
   <Header />
   <Checkout />
  </div>
 );
};
