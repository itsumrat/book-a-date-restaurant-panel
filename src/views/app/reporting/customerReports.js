import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import Customers from '../../../containers/dashboards/Customers';
import WebsiteVisitsChartCard from '../../../containers/dashboards/WebsiteVisitsChartCard';
import { BarChart } from '../../../components/charts';
import {
  starterDailyBilling,
  starterMonthlyBilling,
  starterWeeklyBilling,
  starterYearlyBilling
} from './billingReports';

const CustomerReports = ({ intl, match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.customers-reports" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" xl="12">
          <Row>
            <Colxx md="6" className="mb-4">
              <Customers />
            </Colxx>
            <Colxx md="6" className="mb-4">
              <WebsiteVisitsChartCard />
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
        </Colxx>
      </Row>
    </>
  );
};
export default React.memo(CustomerReports);
