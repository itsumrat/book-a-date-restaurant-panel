/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Row, CardTitle } from 'reactstrap';
import { injectIntl } from 'react-intl';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { Separator, Colxx } from '../../../components/common/CustomBootstrap';
import { pricesData } from '../../../data/prices';
import PriceCard from '../../../components/cards/PriceCard';
import FeatureComparison from '../../../containers/pages/FeatureComparison';
import IntlMessages from '../../../helpers/IntlMessages';
import { defaultLocale } from '../../../constants/defaultValues';
import InvoiceStatement from './invoiceStatement';

const locale = localStorage.getItem('currentLanguage') || defaultLocale;
export const invoiceData = [
  {
    id: 1,
    start_date: new Date(),
    end_date: new Date('12/14/2020'),
    paid: false,
    team: 'Sam Smith',
    enterprise: true,
  },
  {
    id: 2,
    start_date: new Date(),
    end_date: new Date('12/14/2020'),
    paid: true,
    team: 'Sam Smith',
    enterprise: false,
  },
  {
    id: 3,
    start_date: new Date(),
    end_date: new Date('12/14/2020'),
    paid: true,
    team: 'Sam Smith',
    enterprise: true,
  },
  {
    id: 4,
    start_date: new Date(),
    end_date: new Date('12/14/2020'),
    paid: false,
    team: 'Steav Smith',
    enterprise: false,
  },
  {
    id: 5,
    start_date: new Date(),
    end_date: new Date('12/12/2020'),
    paid: true,
    team: 'Sam Smith',
    enterprise: true,
  },
  {
    id: 6,
    start_date: new Date(),
    end_date: new Date('12/14/2020'),
    paid: true,
    team: 'Tom Black',
    enterprise: false,
  },
];
const BillingPrices = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.prices" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row className="equal-height-container mb-5">
        <Colxx xxs="12">
          <CardTitle>
            <IntlMessages id="pages.prices.pricecomparison" />
          </CardTitle>
        </Colxx>
        {pricesData[locale].map((item, index) => {
          return (
            <Colxx
              md="12"
              lg="4"
              className="col-item mb-4"
              key={`priceCard_${index}`}
            >
              <PriceCard data={item} />
            </Colxx>
          );
        })}
      </Row>
      <Row>
        <Colxx xxs="12">
          <CardTitle>
            <IntlMessages id="pages.prices.invoice-statement" />
          </CardTitle>
        </Colxx>
        <InvoiceStatement data={invoiceData} />
      </Row>
    </>
  );
};
export default injectIntl(BillingPrices);
