import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const SalesReports = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ './salesReports')
);
const CustomerReports = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-content" */ './customerReports')
);
const BookingReports = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-analytics" */ './bookingReports')
);
const ProductReports = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-ecommerce" */ './productReports')
);

const Reporting = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/sales-reports`}
      />
      <Route
        path={`${match.url}/sales-reports`}
        render={(props) => <SalesReports {...props} />}
      />
      <Route
        path={`${match.url}/customers-reports`}
        render={(props) => <CustomerReports {...props} />}
      />
      <Route
        path={`${match.url}/product-reports`}
        render={(props) => <ProductReports {...props} />}
      />
      <Route
        path={`${match.url}/booking-reports`}
        render={(props) => <BookingReports {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Reporting;
