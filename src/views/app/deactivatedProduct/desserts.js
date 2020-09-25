import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Button, Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import FoodCards from '../../../containers/products/FoodCards';
import products from '../../../data/products';

const Desserts = ({ intl, match }) => {
  const desserts = products.filter((pro) => pro.category === 'desserts' && pro.active===false);
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.desserts" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <FoodCards products={desserts} />
    </>
  );
};
export default injectIntl(Desserts);
