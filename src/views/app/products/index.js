import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Details from './details';
import ProductDetailPage from './ProductDetailPage';
import ProductsDetailsAltPages from './Products-details-alt';

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
const ProductDetails = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-ecommerce" */ './details')
);

const Products = ({ match }) => {
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
        <Route
          path={`${match.url}/details`}
          render={(props) => <ProductDetailPage {...props} />}
        />
        <Route
          path={`${match.url}/details-alt`}
          render={(props) => <ProductsDetailsAltPages {...props} />}
        />
        <Route
          exact
          path={`${match.url}/details/:title`}
          render={(props) => <ProductDetails {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
};
export default Products;
