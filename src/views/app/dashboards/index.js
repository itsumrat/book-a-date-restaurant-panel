import React, { Suspense } from 'react';
import { Row } from 'reactstrap';
import { injectIntl } from 'react-intl';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import IconCardsCarousel from '../../../containers/dashboards/IconCardsCarousel';
import SalesChartCard from '../../../containers/dashboards/SalesChartCard';
import RecentOrders from '../../../containers/dashboards/RecentOrders';
import ProductCategoriesDoughnut from '../../../containers/dashboards/ProductCategoriesDoughnut';
import InboundReservations from '../../../containers/dashboards/InboundReservations';
import Customers from '../../../containers/dashboards/Customers';
import Calendar from '../../../containers/dashboards/Calendar';
import BestProductLineSellers from '../../../containers/dashboards/BestProductLineSellers';
import ProductListed from '../../../containers/dashboards/ProductListed';
import SortableStaticticsRow from '../../../containers/dashboards/SortableStaticticsRow';
import WebsiteVisitsChartCard from '../../../containers/dashboards/WebsiteVisitsChartCard';
import ConversionRatesChartCard from '../../../containers/dashboards/ConversionRatesChartCard';
import GradientWithRadialProgressCard from '../../../components/cards/GradientWithRadialProgressCard';
import SmallLineCharts from '../../../containers/dashboards/SmallLineCharts';
import TopRatedItems from '../../../containers/dashboards/TopRatedItems';
import OrderStockRadarChart from '../../../containers/dashboards/OrderStockRadarChart';
import ProductCategoriesPolarArea from '../../../containers/dashboards/ProductCategoriesPolarArea';

const DefaultDashboard = ({ intl, match }) => {
  const { messages } = intl;

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.dashboards" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" xl="6">
          <IconCardsCarousel />
          <Row>
            <Colxx md="12" className="mb-4">
              <SalesChartCard />
            </Colxx>
          </Row>
        </Colxx>
        <Colxx lg="12" xl="6" className="mb-4">
          <RecentOrders />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="6" md="12" className="mb-4">
          {/* <ProductCategoriesPolarArea chartClass="dashboard-donut-chart" /> */}
          <ProductCategoriesDoughnut />
        </Colxx>
        <Colxx lg="6" md="6" className="mb-4">
          {/* <Logs /> */}
          <InboundReservations />
        </Colxx>
        {/*<Colxx lg="6" md="6" className="mb-4">*/}
        {/*  /!* <Tickets /> *!/*/}
        {/*  <Customers />*/}
        {/*</Colxx>*/}
      </Row>
      <Row>
        <Colxx xl="6" lg="12" className="mb-4">
          <Calendar />
        </Colxx>
        <Colxx xl="6" lg="12" className="mb-4">
          {/* <BestSellers /> */}
          <BestProductLineSellers />
        </Colxx>
      </Row>
      <Row>
        {/* <Colxx sm="12" lg="4" className="mb-4"> */}
        {/*  <ProfileStatuses /> */}
        {/* </Colxx> */}
        {/* <Colxx md="6" lg="4" className="mb-4"> */}
        {/*  <GradientCardContainer /> */}
        {/* </Colxx><Colxx sm="12" lg="4" className="mb-4"> */}
        {/*  <ProfileStatuses /> */}
        {/* </Colxx> */}
        {/* <Colxx md="6" lg="4" className="mb-4"> */}
        {/*  <GradientCardContainer /> */}
        {/* </Colxx> */}
        <Colxx md="6" lg="4" className="mb-4">
          <ProductListed />
        </Colxx>
      </Row>
      {/* <SortableStaticticsRow messages={messages} /> */}
      <Row>
        <Colxx sm="12" md="6" className="mb-4">
          <WebsiteVisitsChartCard />
        </Colxx>
        <Colxx sm="12" md="6" className="mb-4">
          <ConversionRatesChartCard />
        </Colxx>
      </Row>
      {/*<Row>*/}
        {/* <Colxx lg="12" md="6" xl="4"> */}
        {/* <Row> */}
        {/*  <Colxx lg="4" xl="12" className="mb-4"> */}
        {/*    <GradientWithRadialProgressCard */}
        {/*      icon="iconsminds-clock" */}
        {/*      title={`5 ${messages['dashboards.files']}`} */}
        {/*      detail={messages['dashboards.pending-for-print']} */}
        {/*      percent={(5 * 100) / 12} */}
        {/*      progressText="5/12" */}
        {/*    /> */}
        {/*  </Colxx> */}
        {/*  <Colxx lg="4" xl="12" className="mb-4"> */}
        {/*    <GradientWithRadialProgressCard */}
        {/*      icon="iconsminds-male" */}
        {/*      title={`4 ${messages['dashboards.orders']}`} */}
        {/*      detail={messages['dashboards.on-approval-process']} */}
        {/*      percent={(4 * 100) / 6} */}
        {/*      progressText="4/6" */}
        {/*    /> */}
        {/*  </Colxx> */}
        {/*  <Colxx lg="4" xl="12" className="mb-4"> */}
        {/*    <GradientWithRadialProgressCard */}
        {/*      icon="iconsminds-bell" */}
        {/*      title={`8 ${messages['dashboards.alerts']}`} */}
        {/*      detail={messages['dashboards.waiting-for-notice']} */}
        {/*      percent={(8 * 100) / 10} */}
        {/*      progressText="8/10" */}
        {/*    /> */}
        {/*  </Colxx> */}
        {/* </Row> */}
        {/* </Colxx> */}
        {/* <Colxx lg="6" md="6" xl="4" sm="12" className="mb-4"> */}
        {/*  <AdvancedSearch messages={messages} /> */}
        {/* </Colxx> */}
        {/*<Colxx lg="6" xl="6" className="mb-4">*/}
        {/*  <SmallLineCharts />*/}
        {/*</Colxx>*/}
        {/*<Colxx lg="6" xl="6" className="mb-4">*/}
        {/*  <TopRatedItems />*/}
        {/*</Colxx>*/}
      {/*</Row>*/}

      {/*  Analytics part */}
      <Row>
        <Colxx sm="12" md="6" className="mb-4">
          <WebsiteVisitsChartCard />
        </Colxx>
        <Colxx sm="12" md="6" className="mb-4">
          <ConversionRatesChartCard />
        </Colxx>
      </Row>
      <Row>
        <Colxx xl="4" lg="6" md="12" className="mb-4">
          <ProductCategoriesDoughnut />
        </Colxx>
        {/* <Colxx xl="4" lg="6" md="12" className="mb-4"> */}
        {/*  <ProfileStatuses cardClass="dashboard-progress" /> */}
        {/* </Colxx> */}
        <Colxx xl="4" lg="12" md="12">
          <SmallLineCharts itemClass="dashboard-small-chart-analytics" />
        </Colxx>
      </Row>
      {/*<SortableStaticticsRow messages={messages} />*/}
      <Row>
        <Colxx xxs="12" lg="6" className="mb-4">
          <OrderStockRadarChart />
        </Colxx>
        <Colxx xxs="12" lg="6" className="mb-4">
          <ProductCategoriesPolarArea />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <SalesChartCard />
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(DefaultDashboard);
