import React from 'react';
import { Row, CardTitle } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
import produtcs from '../../data/products';
import FoodCard from './FoodCard';

const FoodCards = () => {
  return (
    <Row>
      <Colxx xxs="12">
        <CardTitle className="mb-4">
          <IntlMessages id="products.product-list" />
        </CardTitle>
        <Row>
          {produtcs.map((product) => (
            <FoodCard product={product} key={product.id} />
          ))}
        </Row>
      </Colxx>
    </Row>
  );
};

export default FoodCards;
