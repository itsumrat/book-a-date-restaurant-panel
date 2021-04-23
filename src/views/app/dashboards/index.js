import React, { Suspense, useState } from 'react';
import { Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { injectIntl } from 'react-intl';

import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import IconCardsCarousel from '../../../containers/dashboards/IconCardsCarousel';

import RecentOrders from '../../../containers/dashboards/RecentOrders';
import ProductCategoriesDoughnut from '../../../containers/dashboards/ProductCategoriesDoughnut';

import BestProductLineSellers from '../../../containers/dashboards/BestProductLineSellers';

import SpecialDays from '../../../containers/email/SpecialDays';
import IntlMessages from '../../../helpers/IntlMessages';
import SpecialDayForm from '../../../containers/email/SpecialDayForm';
import TotalRevenue from './TotalRevenue';
const DefaultDashboard = ({ intl, match }) => {
  const [modalBasic, setModalBasic] = useState(false);
  const [specialDays, setSpecialDays] = useState([
    {
      day: "New Year's Day",
      status: 'Open',
      date: new Date('Fri Jan 01 2021'),
      campaign: 'Morning Shift',
    },
    {
      day: '2nd January (substitute day)',
      status: 'Open',
      date: new Date('Fri Jan 04 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Epiphany',
      status: 'Close',
      date: new Date('Fri Jan 06 2021'),
      campaign: 'No Shift',
    },
    {
      day: 'Orthodox Christmas Day',
      status: 'Open',
      date: new Date('Fri Jan 07 2021'),
      campaign: 'Afternoon Shift',
    },
    {
      day: 'Orthodox New Year',
      status: 'Open',
      date: new Date('Fri Jan 14 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Burns Night',
      status: 'Open',
      date: new Date('Fri Jan 25 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "Tu B'Shevat (Arbor Day)",
      status: 'Open',
      date: new Date('Fri Jan 28 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Chinese New Year',
      status: 'Open',
      date: new Date('Fri Feb 12 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "Valentine's Day",
      status: 'Open',
      date: new Date('Fri Feb 14 2021'),
      campaign: '3 Course Dinner discounts ',
    },
    {
      day: 'Carnival / Shrove Tuesday',
      status: 'Open',
      date: new Date('Fri Feb 16 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Carnival / Ash Wednesday',
      status: 'Open',
      date: new Date('Fri Feb 17 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Purim',
      status: 'Open',
      date: new Date('Fri Feb 26 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "St. David's Day",
      status: 'Open',
      date: new Date('Fri Mar 01 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Maha Shivaratri',
      status: 'Open',
      date: new Date('Fri Mar 11 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "Isra and Mi'raj",
      status: 'Open',
      date: new Date('Fri Mar 11 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Mothering Sunday',
      status: 'Open',
      date: new Date('Fri Mar 14 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "St Patrick's Day",
      status: 'Open',
      date: new Date('Fri Mar 17 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'March Equinox',
      status: 'Open',
      date: new Date('Fri Mar 20 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Palm Sunday',
      status: 'Open',
      date: new Date('Fri Mar 28 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'First day of Passover',
      status: 'Open',
      date: new Date('Fri Mar 28 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Daylight Saving Time starts',
      status: 'Open',
      date: new Date('Fri Mar 29 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Holi',
      status: 'Open',
      date: new Date('Fri Mar 29 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Maundy Thursday',
      status: 'Open',
      date: new Date('Fri Apr 01 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Good Friday',
      status: 'Open',
      date: new Date('Fri Apr 02 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Holy Saturday',
      status: 'Open',
      date: new Date('Fri Apr 03 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Last day of Passover',
      status: 'Open',
      date: new Date('Fri Apr 04 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Easter Sunday',
      status: 'Open',
      date: new Date('Fri Apr 04 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Easter Monday',
      status: 'Open',
      date: new Date('Fri Apr 05 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Yom HaShoah',
      status: 'Open',
      date: new Date('Fri Apr 08 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Ramadan Start',
      status: 'Open',
      date: new Date('Fri Apr 13 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Yom HaAtzmaut',
      status: 'Open',
      date: new Date('Fri Apr 15 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Stephen Lawrence Day',
      status: 'Open',
      date: new Date('Fri Apr 22 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "St. George's Day",
      status: 'Open',
      date: new Date('Fri Apr 23 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Shakespeare Day',
      status: 'Open',
      date: new Date('Fri Apr 23 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "Lag B'Omer",
      status: 'Open',
      date: new Date('Fri Apr 30 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Orthodox Good Friday',
      status: 'Open',
      date: new Date('Fri Apr 30 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Orthodox Holy Saturday',
      status: 'Open',
      date: new Date('Fri May 01 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Orthodox Easter',
      status: 'Open',
      date: new Date('Fri May 02 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Orthodox Easter Monday',
      status: 'Open',
      date: new Date('Fri May 03 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Early May Bank Holiday',
      status: 'Open',
      date: new Date('Fri May 03 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Laylatul Qadr (Night of Power)',
      status: 'Open',
      date: new Date('Fri May 08 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Ascension Day',
      status: 'Open',
      date: new Date('Fri May 13 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Eid ul Fitr',
      status: 'Open',
      date: new Date('Fri May 13 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Shavuot',
      status: 'Open',
      date: new Date('Fri May 17 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Pentecost',
      status: 'Open',
      date: new Date('Fri May 23 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Whit Monday',
      status: 'Open',
      date: new Date('Fri May 24 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Trinity Sunday',
      status: 'Open',
      date: new Date('Fri May 30 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Spring Bank Holiday',
      status: 'Open',
      date: new Date('Fri May 31 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Corpus Christi',
      status: 'Open',
      date: new Date('Fri Jun 03 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "Queen's Birthday",
      status: 'Open',
      date: new Date('Fri Jun 12 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "Father's Day",
      status: 'Open',
      date: new Date('Fri Jun 20 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'June Solstice',
      status: 'Open',
      date: new Date('Fri Jun 21 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Windrush Day',
      status: 'Open',
      date: new Date('Fri Jun 22 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Battle of the Boyne',
      status: 'Open',
      date: new Date('Fri Jul 12 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "Tisha B'Av",
      status: 'Open',
      date: new Date('Fri Jul 18 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Eid ul Adha',
      status: 'Open',
      date: new Date('Fri Jul 20 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Summer Bank Holiday',
      status: 'Open',
      date: new Date('Fri Aug 02 2021'),
      campaign: '-241 Cocktail discounts ',
    },
    {
      day: 'Muharram/Islamic New Year',
      status: 'Open',
      date: new Date('Fri Aug 10 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Assumption of Mary',
      status: 'Open',
      date: new Date('Fri Aug 15 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Ashura (Tentative Date)',
      status: 'Open',
      date: new Date('Fri Aug 19 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Raksha Bandhan',
      status: 'Open',
      date: new Date('Fri Aug 22 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Janmashtami',
      status: 'Open',
      date: new Date('Fri Aug 30 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Summer Bank Holiday',
      status: 'Open',
      date: new Date('Fri Aug 30 2021'),
      campaign: '-241 Cocktail discounts ',
    },
    {
      day: 'Rosh Hashana',
      status: 'Open',
      date: new Date('Fri Sep 07 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Ganesh Chaturthi',
      status: 'Open',
      date: new Date('Fri Sep 10 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Yom Kippur',
      status: 'Open',
      date: new Date('Fri Sep 16 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'First day of Sukkot',
      status: 'Open',
      date: new Date('Fri Sep 21 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'September Equinox',
      status: 'Open',
      date: new Date('Fri Sep 22 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Hoshana Rabbah',
      status: 'Open',
      date: new Date('Fri Sep 27 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Shemini Atzeret',
      status: 'Open',
      date: new Date('Fri Sep 28 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Simchat Torah',
      status: 'Open',
      date: new Date('Fri Sep 29 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Feast of St Francis of Assisi)',
      status: 'Open',
      date: new Date('Fri Oct 04 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Navaratri)',
      status: 'Open',
      date: new Date('Fri Oct 07 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Dussehra)',
      status: 'Open',
      date: new Date('Fri Oct 14 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Milad un Nabi (Mawlid)',
      status: 'Open',
      date: new Date('Fri Oct 19 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Halloween',
      status: 'Open',
      date: new Date('Fri Oct 31 2021'),
      campaign: '-25% Discount Signature dinner package',
    },

    {
      day: 'Daylight Saving Time ends',
      status: 'Open',
      date: new Date('Fri Oct 31 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: "All Saints' Day",
      status: 'Open',
      date: new Date('Fri Nov 01 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Diwali/Deepavali',
      status: 'Open',
      date: new Date('Fri Nov 04 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Guy Fawkes Day',
      status: 'Open',
      date: new Date('Fri Nov 05 2021'),
      campaign: 'Complimentary Champagne',
    },

    {
      day: 'Remembrance Sunday',
      status: 'Open',
      date: new Date('Fri Nov 14 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'First Sunday of Advent',
      status: 'Open',
      date: new Date('Fri Nov 28 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'First Day of Hanukkah',
      status: 'Open',
      date: new Date('Fri Nov 29 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: "St Andrew's Day",
      status: 'Open',
      date: new Date('Fri Nov 30 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Last day of Hanukkah',
      status: 'Open',
      date: new Date('Fri Dec 06 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Feast of the Immaculate Conception',
      status: 'Open',
      date: new Date('Fri Dec 08 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'December Solstice',
      status: 'Open',
      date: new Date('Fri Dec 21 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Christmas Eve',
      status: 'Open',
      date: new Date('Fri Dec 24 2021'),
      campaign: '25% Discount Signature dinner package',
    },
    {
      day: 'Christmas Day',
      status: 'Open',
      date: new Date('Fri Dec 25 2021'),
      campaign: '25% Discount Signature dinner package',
    },

    {
      day: 'Boxing Day',
      status: 'Open',
      date: new Date('Fri Dec 26 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Substitute Bank Holiday for Christmas Day',
      status: 'Open',
      date: new Date('Fri Dec 27 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Substitute Bank Holiday for Boxing Day',
      status: 'Open',
      date: new Date('Fri Dec 28 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: "New Year's Eve",
      status: 'Open',
      date: new Date('Fri Dec 31 2021'),
      campaign: 'Ultimate Package',
    },
  ]);
  const handleAddSpecialDay = () => {
    setModalBasic(true);
  };
  const onSpecialDaySubmit = (values) => {
    console.log(values);
    setSpecialDays((state) => {
      return [...state, values];
    });
  };
  const closeModal = () => {
    setModalBasic(false);
  };
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.dashboards" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row className="mb-4">
        <Colxx xl="6" lg="12" className="d-block">
          {/* <BestSellers /> */}
          <BestProductLineSellers />
        </Colxx>
        <Colxx lg="6" xl="6">
          <RecentOrders />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" xl="12">
          <IconCardsCarousel />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="6" md="12" className="mb-4">
          {/* <ProductCategoriesPolarArea chartClass="dashboard-donut-chart" /> */}
          <ProductCategoriesDoughnut />
        </Colxx>
        {/* <Colxx lg="6" md="6" className="mb-4"> */}
        {/*  /!* <Logs /> *!/ */}
        {/*  <InboundReservations /> */}
        {/* </Colxx> */}
        {/* <Colxx lg="6" md="6" className="mb-4"> */}
        {/*  /!* <Tickets /> *!/ */}
        {/*  <Customers /> */}
        {/* </Colxx> */}
        <Colxx md="6" className="mb-4">
          <TotalRevenue />
        </Colxx>
      </Row>

      {/* <Row> */}
      {/* <Colxx xl="6" lg="12" className="mb-4"> */}
      {/*  <Calendar /> */}
      {/* </Colxx> */}
      {/* <Colxx md="6" className="mb-4"> */}
      {/*  <SalesChartCard /> */}
      {/* </Colxx> */}
      {/* </Row> */}

      {/* <Row> */}
      {/*  <Colxx md="12" className="mb-4"> */}
      {/*    <Card style={{ height: 500 }} className="mb-4"> */}
      {/*      <CardBody> */}
      {/*        <h3> Total Reservations</h3> */}
      {/*        <BarChart shadow data={starterWeeklyBilling} /> */}
      {/*      </CardBody> */}
      {/*    </Card> */}
      {/*    <div className="mt-5"> */}
      {/*      <SmallLineCharts itemClass="dashboard-small-chart-analytics" /> */}
      {/*    </div> */}
      {/*  </Colxx> */}
      {/* </Row> */}
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
        {/* <Colxx md="6" lg="4" className="mb-4"> */}
        {/*  <ProductListed /> */}
        {/* </Colxx> */}
      </Row>
      {/* <SortableStaticticsRow messages={messages} /> */}
      {/* <Row> */}
      {/*  <Colxx sm="12" md="6" className="mb-4"> */}
      {/*    <WebsiteVisitsChartCard /> */}
      {/*  </Colxx> */}
      {/*  <Colxx sm="12" md="6" className="mb-4"> */}
      {/*    <ConversionRatesChartCard /> */}
      {/*  </Colxx> */}
      {/* </Row> */}
      {/* <Row> */}
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
      {/* <Colxx lg="6" xl="6" className="mb-4"> */}
      {/*  <SmallLineCharts /> */}
      {/* </Colxx> */}
      {/* <Colxx lg="6" xl="6" className="mb-4"> */}
      {/*  <TopRatedItems /> */}
      {/* </Colxx> */}
      {/* </Row> */}

      {/*  Analytics part */}
      {/* <Row> */}
      {/*  <Colxx sm="12" md="6" className="mb-4"> */}
      {/*    <WebsiteVisitsChartCard /> */}
      {/*  </Colxx> */}
      {/*  <Colxx sm="12" md="6" className="mb-4"> */}
      {/*    <ConversionRatesChartCard /> */}
      {/*  </Colxx> */}
      {/* </Row> */}

      {/* <Row> */}
      {/* <Colxx xl="4" lg="6" md="12" className="mb-4"> */}
      {/*  <ProductCategoriesDoughnut /> */}
      {/* </Colxx> */}
      {/* <Colxx xl="4" lg="6" md="12" className="mb-4"> */}
      {/*  <ProfileStatuses cardClass="dashboard-progress" /> */}
      {/* </Colxx> */}
      {/*  <Colxx xl="12" xxs="12" lg="6" className="mb-4"> */}
      {/*    <OrderStockRadarChart /> */}
      {/*  </Colxx> */}
      {/* </Row> */}

      {/* <SortableStaticticsRow messages={messages} /> */}

      <Row>
        {/* <Colxx xxs="12" lg="6" className="mb-4"> */}
        {/*  <ProductCategoriesPolarArea /> */}
        {/* </Colxx> */}
        <Colxx>
          <SpecialDays
            data={specialDays}
            handleAddSpecialDay={handleAddSpecialDay}
          />
        </Colxx>
      </Row>
      {/* <Row> */}
      {/*  <Colxx xxs="12" className="mb-4"> */}
      {/*    <SalesChartCard /> */}
      {/*  </Colxx> */}
      {/* </Row> */}
      <Modal isOpen={modalBasic} toggle={() => setModalBasic(!modalBasic)}>
        <ModalHeader>
          <IntlMessages id="modal.add-special-day" />
        </ModalHeader>
        <ModalBody>
          <SpecialDayForm
            onSubmit={onSpecialDaySubmit}
            closeModal={closeModal}
          />
        </ModalBody>
      </Modal>
    </>
  );
};
export default injectIntl(DefaultDashboard);
