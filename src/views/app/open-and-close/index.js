import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { CardHeader, Nav, NavItem, Row, TabContent, TabPane } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import Card from 'reactstrap/es/Card';
import CardTitle from 'reactstrap/es/CardTitle';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import TimeTableTable from '../../../containers/open-and-close/TimeTableTable';
import SpecialDaysTable from '../../../containers/open-and-close/SpecialDaysTable';

const OpenAndClosingHour = ({ intl, match }) => {
  const [activeTab, setActiveTab] = useState('timeTable');

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.open-close-hour" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" md="12">
          <Card>
            <CardTitle className="m-3">Working Table</CardTitle>
            <Separator />
            <CardHeader className="pl-0 pr-0">
              <Nav tabs className="card-header-tabs ml-0 mr-0">
                <NavItem className="w-50 text-center">
                  <NavLink
                    to="#"
                    location={{}}
                    className={classnames({
                      active: activeTab === 'timeTable',
                      'nav-link': true,
                    })}
                    onClick={() => setActiveTab('timeTable')}
                  >
                    <IntlMessages id="open-close-hour.time-table" />
                  </NavLink>
                </NavItem>
                <NavItem className="w-50 text-center">
                  <NavLink
                    to="#"
                    location={{}}
                    className={classnames({
                      active: activeTab === 'specialDays',
                      'nav-link': true,
                    })}
                    onClick={() => setActiveTab('specialDays')}
                  >
                    <IntlMessages id="open-close-hour.special-days" />
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <TabContent activeTab={activeTab} className="chat-app-tab-content">
              <TabPane tabId="timeTable" className="chat-app-tab-pane">
                <PerfectScrollbar
                  options={{ suppressScrollX: true, wheelPropagation: false }}
                >
                  <div className="pt-2 pr-4 pl-4 pb-2">
                    <TimeTableTable />
                  </div>
                </PerfectScrollbar>
              </TabPane>
              <TabPane tabId="specialDays" className="chat-app-tab-pane">
                <PerfectScrollbar
                  options={{ suppressScrollX: true, wheelPropagation: false }}
                >
                  <div className="pt-2 pr-4 pl-4 pb-2">
                    <SpecialDaysTable />
                  </div>
                </PerfectScrollbar>
              </TabPane>
            </TabContent>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(OpenAndClosingHour);
