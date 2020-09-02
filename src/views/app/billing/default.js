import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import SortableStaticticsRow from '../../../containers/dashboards/SortableStaticticsRow';
import { injectIntl } from 'react-intl';
import BillingStatus from '../../../containers/billing/BillingStatus';

const Default = ({ intl, match }) => {
  const { messages } = intl;
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.billing" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" xl="12">
          <Row>
            <Colxx md="12" className="mb-4">
              <BillingStatus messages={messages} />
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </>
  );
};

export default injectIntl(Default);
