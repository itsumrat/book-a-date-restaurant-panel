import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import Card from 'reactstrap/es/Card';
import Table from 'reactstrap/es/Table';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { BarChart } from '../../../components/charts';
import { ThemeColors } from '../../../helpers/ThemeColors';

const colors = ThemeColors();

export const starterDailyBilling = {
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
      label: 'Starters',
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [54, 63, 60, 65, 60, 68, 60],
      borderWidth: 2,
    },
  ],
};

export const starterWeeklyBilling = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Starters',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [425, 450, 490, 520],
      borderWidth: 2,
    },
  ],
};
export const starterMonthlyBilling = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Starters',
      borderColor: colors.themeColor4,
      backgroundColor: colors.themeColor4_10,
      data: [
        2000,
        4000,
        4000,
        5000,
        6000,
        7000,
        9000,
        9000,
        12000,
        12000,
        14000,
        16000,
      ],
      borderWidth: 2,
    },
  ],
};

export const starterYearlyBilling = {
  labels: ['YR 1', 'YR 2', 'YR 3', 'YR 4'],
  datasets: [
    {
      label: 'Starters',
      borderColor: colors.themeColor3,
      backgroundColor: colors.themeColor3_10,
      data: [18000, 20000, 24000, 28000],
      borderWidth: 2,
    },
  ],
};

const TransactionReports = ({ intl, match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.billing-reports" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Row>
            <Colxx xxs={12}>
              <div style={{ textAlign: 'center' }}>
                <h1>Average Transaction Size(by device)</h1>
              </div>
              <Table>
                <tbody>
                  <tr className="text-center">
                    <td>
                      <Card className="p-2">Phone</Card>
                    </td>
                    <td>
                      <Card className="p-2">£100</Card>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>
                      <Card className="p-2">Laptop</Card>
                    </td>
                    <td>
                      <Card className="p-2">£200</Card>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>
                      <Card className="p-2">Tablet</Card>
                    </td>
                    <td>
                      <Card className="p-2">£300</Card>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Colxx>
          </Row>
        </Colxx>
        <Colxx xxs="12">
          <Row>
            <Colxx xxs={12}>
              <div style={{ textAlign: 'center' }}>
                <h1>Average Transaction Size(by payment type)</h1>
              </div>
              <Table>
                <tbody>
                  <tr className="text-center">
                    <td>
                      <Card className="p-2">American Express</Card>
                    </td>
                    <td>
                      <Card className="p-2">£100</Card>
                    </td>
                    <td>
                      <Card className="p-2">10%</Card>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>
                      <Card className="p-2">Master Card</Card>
                    </td>
                    <td>
                      <Card className="p-2">£200</Card>
                    </td>
                    <td>
                      <Card className="p-2">20%</Card>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>
                      <Card className="p-2">Visa</Card>
                    </td>
                    <td>
                      <Card className="p-2">£300</Card>
                    </td>
                    <td>
                      <Card className="p-2">20%</Card>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>
                      <Card className="p-2">debit Card</Card>
                    </td>
                    <td>
                      <Card className="p-2">£300</Card>
                    </td>
                    <td>
                      <Card className="p-2">20%</Card>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>
                      <Card className="p-2">Credit Card</Card>
                    </td>
                    <td>
                      <Card className="p-2">£300</Card>
                    </td>
                    <td>
                      <Card className="p-2">20%</Card>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Colxx>
          </Row>
          <Row>2</Row>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(TransactionReports);
