import React from 'react';
import { Row, CardTitle } from 'reactstrap';
import Card from 'reactstrap/es/Card';
import CardBody from 'reactstrap/es/CardBody';
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
          <Colxx>
            {products.length === 0 && (
              <Card>
                <CardBody className="align-content-center">
                  <h1>No Product Found</h1>
                </CardBody>
              </Card>
            )}
            <Row>
              {products.map((product) => (
                <FoodCard product={product} key={product.id} />
              ))}
            </Row>
          </Colxx>
        </Row>
      </Colxx>
    </Row>
  );
};

export default FoodCards;
