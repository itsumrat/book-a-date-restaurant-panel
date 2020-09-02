import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const EmailDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ './default')
);
const EmailMailing = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-content" */ './mailing')
);

const Email = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />
      <Route
        path={`${match.url}/default`}
        render={(props) => <EmailDefault {...props} />}
      />
      <Route
        path={`${match.url}/mailing`}
        render={(props) => <EmailMailing {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Email;
