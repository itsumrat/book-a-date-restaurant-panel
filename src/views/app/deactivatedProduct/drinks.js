import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Button, Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import FoodCards from '../../../containers/products/FoodCards';
import products from '../../../data/products';


const Drinks = ({ intl, match }) => {
  const drinks = products.filter((pro) => pro.category === 'drinks' && pro.active===false);
  return (
    <Row>
      <Colxx>
        <Row>
          <Colxx xxs="12">
            <Row>
              <Breadcrumb heading="menu.drinks" match={match} />
            </Row>

            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <FoodCards products={drinks} />
      </Colxx>
    </Row>
  );
};
export default injectIntl(Drinks);
