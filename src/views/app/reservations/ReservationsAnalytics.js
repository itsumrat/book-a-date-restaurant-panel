import React from 'react';
import { Row } from 'reactstrap';
import { Colxx } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import ReservationCard from '../../../containers/reservations/ReservationCard';
import GuestsCard from '../../../containers/reservations/GuestsCard';
import NextDaysCard from '../../../containers/reservations/NextDaysCard';
import ReservationYesterday from '../../../containers/reservations/ReservationYesterday';
import GuestYesterday from '../../../containers/reservations/GuestYesterday';
import LastSevenDays from '../../../containers/reservations/LastSevendays';

const ReservationsAnalytics = ({ match }) => {
  return (
    <Row>
      <Colxx xxs="12">
        <div className="mb-2">
          <Breadcrumb match={match} />
        </div>
      </Colxx>
      <Colxx xxs="12">
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
        <br />
        <Row>
          <Colxx lg="12" xl="12">
            <Row>
              <Colxx lg="4">
                <ReservationYesterday />
              </Colxx>
              <Colxx lg="4">
                <GuestYesterday />
              </Colxx>
              <Colxx lg="4">
                <LastSevenDays />
              </Colxx>
            </Row>
          </Colxx>
        </Row>
      </Colxx>
    </Row>
  );
};
export default ReservationsAnalytics;
