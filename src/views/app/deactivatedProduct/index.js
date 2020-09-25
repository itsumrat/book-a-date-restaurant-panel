import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// import ProductDetailPage from '../products/ProductDetailPage';
// import ProductsDetailsAltPages from '../products/Products-details-alt';

const ProductDrinks = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ './drinks')
);
const ProductStarters = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-content" */ './starters')
);
const ProductMains = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-analytics" */ './mains')
);
const ProductDesserts = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-ecommerce" */ './desserts')
);

const DeactivateProducts = ({ match }) => {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/drinks`} />
        <Route
          path={`${match.url}/drinks`}
          render={(props) => <ProductDrinks {...props} />}
        />
        <Route
          path={`${match.url}/starters`}
          render={(props) => <ProductStarters {...props} />}
        />
        <Route
          path={`${match.url}/desserts`}
          render={(props) => <ProductDesserts {...props} />}
        />
        <Route
          path={`${match.url}/mains`}
          render={(props) => <ProductMains {...props} />}
        />
        {/*<Route*/}
        {/*  exact*/}
        {/*  path={`${match.url}/details/:id`}*/}
        {/*  render={(props) => <ProductDetailPage {...props} />}*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path={`${match.url}/details-alt`}*/}
        {/*  render={(props) => <ProductsDetailsAltPages {...props} />}*/}
        {/*/>*/}
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
};
export default DeactivateProducts;
