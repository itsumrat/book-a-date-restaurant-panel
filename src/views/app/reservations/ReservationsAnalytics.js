import React from 'react';
import { Row } from 'reactstrap';
import CardBody from 'reactstrap/es/CardBody';
import Card from 'reactstrap/es/Card';
import { Colxx } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import ReservationCard from '../../../containers/reservations/ReservationCard';
import GuestsCard from '../../../containers/reservations/GuestsCard';
import NextDaysCard from '../../../containers/reservations/NextDaysCard';
import ReservationYesterday from '../../../containers/reservations/ReservationYesterday';
import GuestYesterday from '../../../containers/reservations/GuestYesterday';
import LastSevenDays from '../../../containers/reservations/LastSevendays';
import { BarChart } from '../../../components/charts';
import { ThemeColors } from '../../../helpers/ThemeColors';
import {
  starterDailyBilling,
  starterMonthlyBilling,
  starterWeeklyBilling,
  starterYearlyBilling
} from '../reporting/transactionReports';
import ConversionRatesChartCard from '../../../containers/dashboards/ConversionRatesChartCard';
import SalesChartCard from '../../../containers/dashboards/SalesChartCard';

const colors = ThemeColors();
export const dailyReservations = {
  labels: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  datasets: [
    {
      label: 'Daily Reservations',
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [456, 479, 324, 569, 657, 600, 500],
      borderWidth: 2,
    },
  ],
};
export const reservationByDevice = {
  labels: ['Mobile', 'Laptop', 'ipad'],
  datasets: [
    {
      label: 'By Device Reservations',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [657, 600, 500],
      borderWidth: 2,
    },
  ],
};

export const reservationByOs = {
  labels: ['IOS', 'Android'],
  datasets: [
    {
      label: 'By Os Reservations',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [657, 500],
      borderWidth: 2,
    },
  ],
};

const ReservationsAnalytics = ({ match }) => {
  return (
    <Row>
      <Colxx xxs="12">
        <div className="mb-2">
          <Breadcrumb match={match} />
        </div>
      </Colxx>
      <Colxx xxs="12">
        <br />
        <Row>
          <Colxx lg="12" xl="12">
            <Row>
              <Colxx lg="4">
                <ReservationCard
                  header="Total Reservations"
                  title="Total Reservations"
                  value={1000}
                />
              </Colxx>
              <Colxx lg="4">
                <ReservationCard
                  header="Reservations Cost"
                  title="Reservations Cost"
                  value="£ 2000"
                />
              </Colxx>
              <Colxx lg="4">
                <ReservationCard
                  header="Total reservations with Product"
                  title="Product Reservations"
                  value="200"
                />
              </Colxx>
            </Row>
            <br />
            <Row>
              <Colxx lg="4">
                <ReservationCard
                  header="Total reservations with Drinks"
                  title="Drinks Reservations"
                  value="50"
                />
              </Colxx>
              <Colxx lg="4">
                <ReservationCard
                  header="Total reservations with Dining"
                  title="Dining Reservations"
                  value="80"
                />
              </Colxx>
              <Colxx lg="4">
                <ReservationCard
                  header="Total reservations with Ticket"
                  title="Ticket Reservations"
                  value="40"
                />
              </Colxx>
              {/* <Colxx lg="4" className="mt-3">
                <ReservationCard
                  header="Total reservations with Desserts"
                  title="Desserts Reservations"
                  value="100"
                />
              </Colxx> */}
            </Row>
          </Colxx>
        </Row>
      </Colxx>
      <Colxx xxs={12}>
        <Row className="">
          <Colxx className="mt-4">
            <Card className="mb-4  ">
              <CardBody style={{ height: 500 }}>
                <h3> Daily Reservations</h3>
                <BarChart shadow data={dailyReservations} />
              </CardBody>
            </Card>
          </Colxx>
          <Colxx className="mt-4">
            <Card className="mb-4 ">
              <CardBody style={{ height: 500 }}>
                <h3>Reservations by device</h3>
                <BarChart shadow data={reservationByDevice} />
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <Row>
          <Colxx className="mt-4">
            <Card className="mb-4 ">
              <CardBody style={{ height: 500 }}>
                <h3>Reservations by os</h3>
                <BarChart shadow data={reservationByDevice} />
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Colxx>
      <Colxx xxs="12">
        <Row>
          <Colxx lg="12" xl="12">
            <Row className="mb-2">
              <Colxx md="6" className="mb-4">
                <Card>
                  <CardBody style={{ height: 500 }}>
                    <h3> Reservations Daily</h3>
                    <BarChart shadow data={dailyReservations} />
                  </CardBody>
                </Card>
              </Colxx>
              <Colxx md="6" className="mb-4">
                <Card>
                  <CardBody style={{ height: 500 }}>
                    <h3> Reservations Weekly</h3>
                    <BarChart shadow data={starterWeeklyBilling} />
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
            <Row className="mb-2">
              <Colxx md="6" className="mb-4">
                <Card>
                  <CardBody style={{ height: 500 }}>
                    <h3> Reservations Monthly</h3>
                    <BarChart shadow data={starterMonthlyBilling} />
                  </CardBody>
                </Card>
              </Colxx>
              <Colxx md="6" className="mb-4">
                <Card>
                  <CardBody style={{ height: 500 }}>
                    <h3> Reservations Yearly</h3>
                    <BarChart shadow data={starterYearlyBilling} />
                  </CardBody>
                </Card>
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
      </Colxx>
    </Row>
  );
};
export default ReservationsAnalytics;
