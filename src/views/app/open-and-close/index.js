import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const OpenAndClosingHour = ({ intl, match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.open-close-hour" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <h1>Open And Closing Hour Page</h1>
      </Row>
    </>
  );
};
export default injectIntl(OpenAndClosingHour);
