import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { BarChart } from '../../../components/charts';
import { ThemeColors } from '../../../helpers/ThemeColors';
import SalesChartCard from '../../../containers/dashboards/SalesChartCard';
import ConversionRatesChartCard from '../../../containers/dashboards/ConversionRatesChartCard';
import {
  starterDailyBilling,
  starterMonthlyBilling,
  starterWeeklyBilling,
  starterYearlyBilling
} from './billingReports';

const colors = ThemeColors();


const ReservationsReports = ({ intl, match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.reservations-reports" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" xl="12">
          <Row>
            <Colxx style={{ height: 500 }} md="6" className="mb-4">
              <h3> Starters Daily</h3>
              <BarChart shadow data={starterDailyBilling} />
            </Colxx>
            <Colxx style={{ height: 500 }} md="6" className="mb-4">
              <h3> Starters Weekly</h3>
              <BarChart shadow data={starterWeeklyBilling} />
            </Colxx>
          </Row>
          <Row>
            <Colxx style={{ height: 500 }} md="6" className="mb-4">
              <h3> Starters Monthly</h3>
              <BarChart shadow data={starterMonthlyBilling} />
            </Colxx>
            <Colxx style={{ height: 500 }} md="6" className="mb-4">
              <h3> Starters Yearly</h3>
              <BarChart shadow data={starterYearlyBilling} />
            </Colxx>
          </Row>
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" xl="12">
          <Row>
            <Colxx md="12" className="mt-4 mb-4">
              <ConversionRatesChartCard />
            </Colxx>
            <Colxx md="12" className="mb-4">
              <SalesChartCard />
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(ReservationsReports);
