import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import ConversionRatesChartCard from '../../../containers/dashboards/ConversionRatesChartCard';

const BookingReports = ({ intl, match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.booking-reports" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" xl="6">
          <Row>
            <Colxx  md="12" className="mb-4">
              <ConversionRatesChartCard />
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(BookingReports);
