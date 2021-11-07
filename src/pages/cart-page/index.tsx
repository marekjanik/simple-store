import React from 'react';
import { Container, Header, Footer } from '../../components';
import { CartPage as Cart } from '@tipser/tipser-elements';

export const CartPage: React.FC = () => {
 return (
  <Container>
   <Header />
   <Cart />
   <Footer />
  </Container>
 );
};
