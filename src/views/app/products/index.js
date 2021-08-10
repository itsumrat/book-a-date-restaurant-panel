import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Details from './details';
import ProductDetailPage from './ProductDetailPage';
import ProductsDetailsAltPages from './Products-details-alt';
import ProductImageList from '../allProducts/ProductImagelist';

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
          path={`${match.url}/dining`}
          render={(props) => <ProductStarters {...props} />}
        />
        <Route
          path={`${match.url}/tickets`}
          render={(props) => <ProductDesserts {...props} />}
        />
        <Route
          path={`${match.url}/mains`}
          render={(props) => <ProductMains {...props} />}
        />
        <Route
          exact
          path={`${match.url}/details/:id`}
          render={(props) => <ProductDetailPage {...props} />}
        />
        <Route
          path={`${match.url}/details-alt`}
          render={(props) => <ProductsDetailsAltPages {...props} />}
        />
        <Route
          path={`${match.url}/all-products`}
          render={(props) => <ProductImageList {...props} />}
        />
        {/*<Route*/}
        {/*  exact*/}
        {/*  path={`${match.url}/details/:title`}*/}
        {/*  render={(props) => <ProductDetails {...props} />}*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path={`${match.url}/thumb-list`}*/}
        {/*  render={(props) => <ReservationThumbList {...props} />}*/}
        {/*/>*/}
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
};
export default Products;
