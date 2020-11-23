import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
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
      data: [456, 479, 324, 569, 657, 600, 500],
      borderWidth: 2,
    },
  ],
};
export const starterWeeklyBilling = {
  labels: [
    'Week 1',
    'Week 2',
    'Week 3',
    'Week 4',
    'Week 5',
    'Week 6',
    'Week 7',
    'Week 8',
  ],
  datasets: [
    {
      label: 'Starters',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [424, 787, 645, 357, 457, 654, 432, 532, 756],
      borderWidth: 2,
    },
  ],
};
export const starterMonthlyBilling = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Starters',
      borderColor: colors.themeColor4,
      backgroundColor: colors.themeColor4_10,
      data: [364, 504, 605, 400, 345, 320],
      borderWidth: 2,
    },
  ],
};

export const starterYearlyBilling = {
  labels: ['YR 1', 'YR 2', 'YR 3', 'YR 4', 'YR 5', 'YR 6'],
  datasets: [
    {
      label: 'Starters',
      borderColor: colors.themeColor3,
      backgroundColor: colors.themeColor3_10,
      data: [753, 357, 358, 400, 785, 320],
      borderWidth: 2,
    },
  ],
};

const BillingReports = ({ intl, match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.billing-reports" match={match} />
          <Separator className="mb-5" />
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
    </>
  );
};
export default injectIntl(BillingReports);
