import React from 'react';
import { Container, Header, Footer } from '../../components';
import { Collection } from '@tipser/tipser-elements';

export const HomePage: React.FC = () => {
 return (
  <Container>
   <Header />
   <Collection collectionId="604ce7d6a8587a3fbe69fa06" imgSize="large" />
   <Footer />
  </Container>
 );
};
