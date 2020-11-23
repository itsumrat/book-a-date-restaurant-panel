import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
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
  starterYearlyBilling
} from './billingReports';

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
            <Colxx lg="8" xl="4" className="mb-4">
              <TopRatedItems />
            </Colxx>
            <Colxx lg="6" md="12" className="mb-4">
              {/* <ProductCategoriesPolarArea chartClass="dashboard-donut-chart" /> */}
              <ProductCategoriesDoughnut />
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
export default React.memo(ProductReports);
