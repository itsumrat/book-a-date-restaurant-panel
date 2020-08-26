import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import ReservationCard from '../../../containers/reservations/ReservationCard';
import GuestsCard from '../../../containers/reservations/GuestsCard';
import NextDaysCard from '../../../containers/reservations/NextDaysCard';
import LatestReservationsCard from '../../../containers/reservations/LatestReservationsCard';
import ReservationListTable from '../../../containers/reservations/ReservationListTable';
import NewRestaurantReservations from '../../../containers/reservations/NewRestaurantReservations';

const ReservationDefault = ({ intl, match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.reservations" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" xl="12">
          <Row>
            <Colxx lg="4">
              <ReservationCard />
            </Colxx>
            <Colxx lg="4">
              <GuestsCard />
            </Colxx>
            <Colxx lg="4">
              <NextDaysCard />
            </Colxx>
          </Row>
        </Colxx>
      </Row>
      <Row className="mt-3">
        <Colxx lg="6">
          <LatestReservationsCard />
        </Colxx>
        <Colxx lg="6">
          {/*<ReservationListTable data={[]} />*/}
          <NewRestaurantReservations/>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(ReservationDefault);
