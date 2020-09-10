import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import AdvancedSearch from '../../../containers/dashboards/AdvancedSearch';

const Search = ({ intl, match }) => {
  const { messages } = intl;
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="advance-search.advance-search" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" xl="12">
          <Row>
            <Colxx md="12" className="mb-4">
              <AdvancedSearch messages={messages} />
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(Search);
