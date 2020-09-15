import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';
import Email from './email';
import Search from './advance-search/index';
import Products from './products';
import Reporting from './reporting';
import Billing from './billing';
import GuestCommunication from './guest-communication';
import Team from './team';
import Reservations from './reservations';
import Settings from './settings';
import Review from './review';
import OpenAndClosingHour from './open-and-close';
import Blog from './blog';
import BlogDetailsPage from './blog/BlogDetailsPage';
import CalendarPage from './calendar';
import ProductCreate from './createProduct';

const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboards')
);
const Pages = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ './pages')
);
const Applications = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './applications')
);
const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './blank-page')
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboards`}
            />
            <Route
              path={`${match.url}/dashboards`}
              render={(props) => <Dashboards {...props} />}
            />
            <Route
              path={`${match.url}/reservations`}
              render={(props) => <Reservations {...props} />}
            />
            <Route
              path={`${match.url}/email`}
              render={(props) => <Email {...props} />}
            />
            <Route
              path={`${match.url}/advance-search`}
              render={(props) => <Search {...props} />}
            />
            <Route
              path={`${match.url}/products`}
              render={(props) => <Products {...props} />}
            />
            <Route
              path={`${match.url}/product-create`}
              render={(props) => <ProductCreate {...props} />}
            />
            <Route
              path={`${match.url}/reporting`}
              render={(props) => <Reporting {...props} />}
            />
            <Route
              path={`${match.url}/billing`}
              render={(props) => <Billing {...props} />}
            />
            {/*<Route*/}
            {/*  path={`${match.url}/guest-communication`}*/}
            {/*  render={(props) => <GuestCommunication {...props} />}*/}
            {/*/>*/}
            <Route
              path={`${match.url}/team`}
              render={(props) => <Team {...props} />}
            />
            <Route
              path={`${match.url}/calendar`}
              render={(props) => <CalendarPage {...props} />}
            />
            <Route
              path={`${match.url}/settings`}
              render={(props) => <Settings {...props} />}
            />
            <Route
              path={`${match.url}/review`}
              render={(props) => <Review {...props} />}
            />
            <Route
              path={`${match.url}/open-close-hour`}
              render={(props) => <OpenAndClosingHour {...props} />}
            />
            <Route
              path={`${match.url}/blog`}
              render={(props) => <Blog {...props} />}
            />
            {/*<Route*/}
            {/*  exact*/}
            {/*  path={`${match.url}/blog/:name`}*/}
            {/*  render={(props) => <BlogDetailsPage {...props} />}*/}
            {/*/>*/}
            <Route
              path={`${match.url}/applications`}
              render={(props) => <Applications {...props} />}
            />
            <Route
              path={`${match.url}/open-and-close-hour`}
              render={(props) => <OpenAndClosingHour {...props} />}
            />
            <Route
              path={`${match.url}/pages`}
              render={(props) => <Pages {...props} />}
            />
            <Route
              path={`${match.url}/ui`}
              render={(props) => <Ui {...props} />}
            />
            {/*<Route*/}
            {/*  path={`${match.url}/menu`}*/}
            {/*  render={(props) => <Menu {...props} />}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*  path={`${match.url}/blank-page`}*/}
            {/*  render={(props) => <BlankPage {...props} />}*/}
            {/*/>*/}
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
