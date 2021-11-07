import React from 'react';
import { Header } from '../../components';
import {
 ModularCheckout,
 CheckoutOrderConfirmation
} from '@tipser/tipser-elements';

export const ConfirmationPage: React.FC = () => {
 return (
  <div>
   <Header />
   <ModularCheckout>
    <CheckoutOrderConfirmation />
   </ModularCheckout>
  </div>
 );
};
