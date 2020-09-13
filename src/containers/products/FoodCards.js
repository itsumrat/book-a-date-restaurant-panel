import React from 'react';
import { Row, CardTitle } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
import FoodCard from './FoodCard';

const FoodCards = ({ products }) => {
  return (
    <Row>
      <Colxx xxs="12">
        <CardTitle className="mb-4">
          <IntlMessages id="products.product-list" />
        </CardTitle>
        <Row>
          {products.map((product) => (
            <FoodCard product={product} key={product.id} />
          ))}
        </Row>
      </Colxx>
    </Row>
  );
};

export default FoodCards;
