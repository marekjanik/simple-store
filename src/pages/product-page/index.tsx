import React from 'react';
import { useParams } from 'react-router';
import {
 Container,
 Header,
 CustomProductModule,
 Footer
} from '../../components';
import { ModularProduct } from '@tipser/tipser-elements';

export const ProductPage: React.FC = () => {
 const { productId } = useParams<{ productId: string }>();

 return (
  <Container>
   <Header />
   <ModularProduct productId={productId}>
    <CustomProductModule />
   </ModularProduct>
   <Footer />
  </Container>
 );
};
