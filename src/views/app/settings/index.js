import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const Settings = ({ intl, match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.settings" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <h1>Settings Page</h1>
      </Row>
    </>
  );
};
export default injectIntl(Settings);
