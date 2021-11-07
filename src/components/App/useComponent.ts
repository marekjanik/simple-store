import { createBrowserHistory, History } from 'history';
import {
 TipserElementsConfigProp,
 TipserEnv,
 TipserLang
} from '@tipser/tipser-elements';

type UseComponentType = {
 history: History;
 posId: string;
 config: TipserElementsConfigProp;
};

export const useComponent = (): UseComponentType => {
 const history = createBrowserHistory();

 const posId = '5ff821b440ef1b00015c5b7d';

 const config = {
  env: TipserEnv.stage,
  lang: TipserLang.enUS,
  addToCartSettings: {
   directToCheckoutMode: false
  },
  customUrls: {
   productBaseUrl: '/product-page',
   cartUrl: '/cart-page',
   checkoutUrl: '/checkout-page',
   checkoutConfirmationUrl: '/confirmation-page'
  },
  disableCartIconDropdown: true
 };

 return {
  history,
  posId,
  config
 };
};
