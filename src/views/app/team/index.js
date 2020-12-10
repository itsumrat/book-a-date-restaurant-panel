import React, { Suspense } from 'react';
import { injectIntl } from 'react-intl';
import { Redirect, Route, Switch } from 'react-router-dom';

const TeamDefault = React.lazy(() =>
  import(/* webpackChunkName: "application-todo" */ './Default')
);
const Todo = React.lazy(() =>
  import(/* webpackChunkName: "application-todo" */ './todo')
);
const Survey = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './survey')
);
const SurveyDetail = React.lazy(() =>
  import(/* webpackChunkName: "application-survey-detail" */ './survey-detail')
);
const Chat = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ './chat')
);
const Social = React.lazy(() =>
  import(/* webpackChunkName: "profile-social" */ './social')
);
const Team = ({ intl, match }) => {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/team-members`} />
        <Route
          exact
          path={`${match.url}/team-members`}
          render={(props) => <TeamDefault {...props} />}
        />
        <Route
          path={`${match.url}/todo`}
          render={(props) => <Todo {...props} />}
        />
        <Route
          path={`${match.url}/survey/:surveyid`}
          render={(props) => <SurveyDetail {...props} />}
          isExact
        />
        <Route
          path={`${match.url}/survey`}
          render={(props) => <Survey {...props} />}
          isExact
        />
        <Route
          path={`${match.url}/chat`}
          render={(props) => <Chat {...props} />}
        />
        <Route
          path={`${match.url}/social`}
          render={(props) => <Social {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
};

export default injectIntl(Team);
