import { useMemo } from 'react';
import { useCartContext } from '@tipser/tipser-elements';
import { CartItemModel } from '@tipser/tipser-elements/dist/api/cart-types';

type UseComponentType = {
 numberOfProducts: number;
 products: CartItemModel[];
 totalPrice: string;
};

export const useComponent = (): UseComponentType => {
 const { shoppingCart } = useCartContext();
 const numberOfProducts = useMemo(
  () => shoppingCart.numberOfProducts,
  [shoppingCart]
 );
 const products = useMemo(() => shoppingCart.items, [shoppingCart]);
 const totalPrice = useMemo(() => shoppingCart.total.formatted, [shoppingCart]);
 return {
  numberOfProducts,
  products,
  totalPrice
 };
};
