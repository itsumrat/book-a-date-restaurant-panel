import React from 'react';
import { injectIntl } from 'react-intl';
import { Card, Row } from 'reactstrap';
import CardBody from 'reactstrap/es/CardBody';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import InboundReservations from '../../../containers/dashboards/InboundReservations';
import SmallLineCharts from '../../../containers/dashboards/SmallLineCharts';
import TopRatedItems from '../../../containers/dashboards/TopRatedItems';
import ProductCategoriesDoughnut from '../../../containers/dashboards/ProductCategoriesDoughnut';
import { BarChart } from '../../../components/charts';
import {
  starterDailyBilling,
  starterMonthlyBilling,
  starterWeeklyBilling,
  starterYearlyBilling,
} from './transactionReports';

const ProductReports = ({ intl, match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.product-reports" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" xl="12">
          <Row>
            <Colxx md="4" className="mb-4">
              <InboundReservations />
            </Colxx>
            <Colxx md="8" className="mb-4">
              <TopRatedItems />
            </Colxx>
            <Colxx md="12" className="mb-4">
              {/* <ProductCategoriesPolarArea chartClass="dashboard-donut-chart" /> */}
              <ProductCategoriesDoughnut />
            </Colxx>
          </Row>
          <Row>
            <Colxx lg="12" xl="12">
              <Row className="mb-2">
                <Colxx md="6" className="mb-4">
                  <Card>
                    <CardBody style={{ height: 500 }}>
                      <h3> Products Daily</h3>
                      <BarChart shadow data={starterDailyBilling} />
                    </CardBody>
                  </Card>
                </Colxx>
                <Colxx md="6" className="mb-4">
                  <Card>
                    <CardBody style={{ height: 500 }}>
                      <h3> Products Weekly</h3>
                      <BarChart shadow data={starterWeeklyBilling} />
                    </CardBody>
                  </Card>
                </Colxx>
              </Row>
              <Row className="mb-2">
                <Colxx md="6" className="mb-4">
                  <Card>
                    <CardBody style={{ height: 500 }}>
                      <h3> Products Monthly</h3>
                      <BarChart shadow data={starterMonthlyBilling} />
                    </CardBody>
                  </Card>
                </Colxx>
                <Colxx md="6" className="mb-4">
                  <Card>
                    <CardBody style={{ height: 500 }}>
                      <h3> Products Yearly</h3>
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
export default React.memo(ProductReports);
