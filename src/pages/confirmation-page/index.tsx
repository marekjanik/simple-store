import React from 'react';
import { Container, Header, Footer } from '../../components';
import {
 ModularCheckout,
 CheckoutOrderConfirmation
} from '@tipser/tipser-elements';

export const ConfirmationPage: React.FC = () => {
 return (
  <Container>
   <Header />
   <ModularCheckout>
    <CheckoutOrderConfirmation />
   </ModularCheckout>
   <Footer />
  </Container>
 );
};
