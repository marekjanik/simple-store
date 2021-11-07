import React from 'react';
import { Container, Header, Footer } from '../../components';
import { CheckoutPage as Checkout } from '@tipser/tipser-elements';

export const CheckoutPage: React.FC = () => {
 return (
  <Container>
   <Header />
   <Checkout />
   <Footer />
  </Container>
 );
};
