import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const BillingDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ './default')
);
const BillingPrice = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-content" */ './price')
);
const BillingInvoice = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-analytics" */ './invoice')
);

const Billing = ({ match }) => {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/invoice`} />
        {/* <Route */}
        {/*  path={`${match.url}/default`} */}
        {/*  render={(props) => <BillingDefault {...props} />} */}
        {/* /> */}
        {/*<Route*/}
        {/*  path={`${match.url}/prices`}*/}
        {/*  render={(props) => <BillingPrice {...props} />}*/}
        {/*/>*/}
        <Route
          path={`${match.url}/invoice`}
          render={(props) => <BillingInvoice {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
};
export default Billing;
