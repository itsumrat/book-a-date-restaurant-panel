import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import BlogDetailsPage from './BlogDetailsPage';

const BlogDefault = React.lazy(() =>
  import(/* webpackChunkName: "pages-product" */ './BlogDefault')
);
const BlogList = React.lazy(() =>
  import(/* webpackChunkName: "blog-list" */ './blog-list')
);

const BlogDetail = React.lazy(() =>
  import(/* webpackChunkName: "blog-detail" */ './blog-detail')
);
const Blog = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />
      <Route
        path={`${match.url}/default`}
        render={(props) => <BlogDefault {...props} />}
      />
      {/*<Route*/}
      {/*  path={`${match.url}/blog-list`}*/}
      {/*  render={(props) => <BlogList {...props} />}*/}
      {/*/>*/}
      <Route
        path={`${match.url}/blog-detail`}
        render={(props) => <BlogDetail {...props} />}
      />
      <Route
        exact
        path={`${match.url}/description/:name`}
        render={(props) => <BlogDetailsPage {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Blog;
