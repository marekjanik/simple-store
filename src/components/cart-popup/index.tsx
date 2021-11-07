import React from 'react';
import { CustomCartModule } from '..';
import { ModularCart } from '@tipser/tipser-elements';

export const CartPopup: React.FC = () => {
 return (
  <ModularCart>
   <CustomCartModule />
  </ModularCart>
 );
};
