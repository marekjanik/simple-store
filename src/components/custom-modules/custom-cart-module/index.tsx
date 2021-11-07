import { useComponent } from './useComponent';
import styles from './styles.module.scss';
import { CartItemModel } from '@tipser/tipser-elements/dist/api/cart-types';

export const CustomCartModule = () => {
 const { numberOfProducts, products, totalPrice } = useComponent();

 return (
  <div className={styles.cart}>
   <div className={styles.cart__header}>
    <div className={styles.cart__number}>My cart ({numberOfProducts})</div>
   </div>
   <div className={styles.cart__list}>{renderProducts(products)}</div>
   <div className={styles.cart__summary}>
    {numberOfProducts === 0 ? (
     <div>Oops, your cart is empty!</div>
    ) : (
     <div className={styles.cart__total}>
      <span>total:</span>
      <div>{totalPrice}</div>
     </div>
    )}
   </div>
  </div>
 );
};

const renderProducts = (products: CartItemModel[]): JSX.Element[] => {
 return products.map((product) => (
  <div key={product.productId} className={styles.product}>
   <div className={styles.product__image}>
    <img src={product.image['50x50']} alt="Product" />
   </div>
   <div className={styles.product__info}>
    <div>
     <div className={styles.product__brand}>{product.brand}</div>
     <div className={styles.product__name}>{product.name}</div>
     <div className={styles.product__price}>{product.price.formatted}</div>
    </div>
    <div>
     <div className={styles.product__attributes}>{product.attributesValue}</div>
     <div className={styles.product__total}>
      <div className={styles.product__quantity}>
       <span>Quantity:</span>
       <span className={styles.product__qvalue}>{product.quantity}</span>
      </div>
     </div>
    </div>
   </div>
  </div>
 ));
};
