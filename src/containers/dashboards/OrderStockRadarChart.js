import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap';

import IntlMessages from '../../helpers/IntlMessages';
import { RadarChart } from '../../components/charts';

import { radarChartData } from '../../data/charts';

const OrderStockRadarChart = ({ controls = true}) => {
  return (
    <Card className="h-100">
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.sales" />
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
        <div className="chart-container">
          <RadarChart shadow data={radarChartData} />
        </div>
      </CardBody>
    </Card>
  );
};

export default OrderStockRadarChart;
