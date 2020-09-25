import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import FoodCards from '../../../containers/products/FoodCards';
import products from '../../../data/products';


const Starters = ({ intl, match }) => {
  const starters = products.filter((pro) => pro.category === 'starter' && pro.active===false);
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.starters" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <FoodCards products={starters} />
    </>
  );
};
export default injectIntl(Starters);
