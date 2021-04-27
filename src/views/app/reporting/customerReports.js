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
} from './transactionReports';
import Card from 'reactstrap/es/Card';
import CardBody from 'reactstrap/es/CardBody';

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
              <Row className="mb-2">
                <Colxx md="6" className="mb-4">
                  <Card>
                    <CardBody style={{ height: 500 }}>
                      <h3> Customers Daily</h3>
                      <BarChart shadow data={starterDailyBilling} />
                    </CardBody>
                  </Card>
                </Colxx>
                <Colxx md="6" className="mb-4">
                  <Card>
                    <CardBody style={{ height: 500 }}>
                      <h3> Customers Weekly</h3>
                      <BarChart shadow data={starterWeeklyBilling} />
                    </CardBody>
                  </Card>
                </Colxx>
              </Row>
              <Row className="mb-2">
                <Colxx md="6" className="mb-4">
                  <Card>
                    <CardBody style={{ height: 500 }}>
                      <h3> Customers Monthly</h3>
                      <BarChart shadow data={starterMonthlyBilling} />
                    </CardBody>
                  </Card>
                </Colxx>
                <Colxx md="6" className="mb-4">
                  <Card>
                    <CardBody style={{ height: 500 }}>
                      <h3> Customers Yearly</h3>
                      <BarChart shadow data={starterYearlyBilling} />
                    </CardBody>
                  </Card>
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
