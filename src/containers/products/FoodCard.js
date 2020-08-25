import React from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
} from 'reactstrap';
import CardTitle from 'reactstrap/es/CardTitle';
import { NavLink } from 'react-router-dom';
import { Colxx } from '../../components/common/CustomBootstrap';

const FoodCard = ({ product }) => {
  return (
    <Colxx xxs="12" xs="6" lg="4">
      <Card className="mb-4">
        <div className="position-relative">
          <CardImg top src={product.img} alt="Card image cap" />
        </div>
        <CardBody>
          <NavLink to={`/app/products/details/${product.title}`}>
            <CardTitle className="mb-4"> {product.title} </CardTitle>
          </NavLink>
          <CardSubtitle className="mb-4">{product.description}</CardSubtitle>
          {/* <CardText className="text-muted text-small mb-0 font-weight-light"> */}
          {/*  {product.createDate} */}
          {/* </CardText> */}
        </CardBody>
      </Card>
    </Colxx>
  );
};

export default FoodCard;
