import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const TeamDefault = React.lazy(() =>
  import(/* webpackChunkName: "pages-product" */ './Default')
);
const Profile = React.lazy(() =>
  import(/* webpackChunkName: "pages-profile" */ './profile')
);
const Team = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/product`} />
      <Route
        path={`${match.url}/default`}
        render={(props) => <TeamDefault {...props} />}
      />
      <Route
        path={`${match.url}/profile`}
        render={(props) => <Profile {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Team;
