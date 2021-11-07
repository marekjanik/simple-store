import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { useComponent } from './useComponent';
import styles from './styles.module.scss';
import './styles.css';
import {
 HomePage,
 ProductPage,
 CartPage,
 CheckoutPage,
 ConfirmationPage
} from '../../pages';
import { PathEnum } from '../../common';
import { TipserElementsProvider } from '@tipser/tipser-elements';
import '@tipser/tipser-elements/dist/index.css';

export const App: React.FC = () => {
 const { history, posId, config } = useComponent();

 return (
  <div className={styles.app}>
   <TipserElementsProvider posId={posId} config={config}>
    <Router history={history}>
     <Switch>
      <Route path={PathEnum.home} exact component={HomePage} />
      <Route path={PathEnum.product} component={ProductPage} />
      <Route path={PathEnum.cart} component={CartPage} />
      <Route path={PathEnum.checkout} component={CheckoutPage} />
      <Route path={PathEnum.confirmation} component={ConfirmationPage} />
     </Switch>
    </Router>
   </TipserElementsProvider>
  </div>
 );
};
