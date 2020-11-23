import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { lineChartData } from '../../../data/charts';
import { LineChart } from '../../../components/charts';

const TotalRevenue = ({ controls= true }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.total-revenue" />
        </CardTitle>
        {controls && (
          <div className="btn-group float-right float-none-xs mb-2">
            <UncontrolledDropdown>
              <DropdownToggle caret color="primary" className="btn-xs" outline>
                <IntlMessages id="dashboards.this-week" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <IntlMessages id="dashboards.last-week" />
                </DropdownItem>
                <DropdownItem>
                  <IntlMessages id="dashboards.this-month" />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        )}
        <div className="dashboard-line-chart">
          <LineChart  shadow data={lineChartData} />
        </div>
      </CardBody>
    </Card>
  );
};

export default TotalRevenue;
