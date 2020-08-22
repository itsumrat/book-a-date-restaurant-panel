import React from 'react';
import {
  // Badge,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
} from 'reactstrap';
import CardTitle from 'reactstrap/es/CardTitle';
import { Colxx } from '../../components/common/CustomBootstrap';
import { NavLink } from 'react-router-dom';

const FoodCard = ({ product }) => {
  return (
    <Colxx xxs="12" xs="6" lg="4">
      <Card className="mb-4">
        <div className="position-relative">
          <CardImg top src={product.img} alt="Card image cap" />
          {/*<Badge*/}
          {/*  color="primary"*/}
          {/*  pill*/}
          {/*  className="position-absolute badge-top-left"*/}
          {/*>*/}
          {/*  NEW*/}
          {/*</Badge>*/}
          {/*<Badge*/}
          {/*  color="secondary"*/}
          {/*  pill*/}
          {/*  className="position-absolute badge-top-left-2"*/}
          {/*>*/}
          {/*  TRENDING*/}
          {/*</Badge>*/}
        </div>
        <CardBody>
          <NavLink to={`/app/products/details/${product.title}`}>
            <CardTitle className="mb-4"> {product.title} </CardTitle>
          </NavLink>
          <CardSubtitle className="mb-4">
            Homemade Cheesecake with Fresh Berries and Mint
          </CardSubtitle>
          <CardText className="text-muted text-small mb-0 font-weight-light">
            09.04.2018
          </CardText>
        </CardBody>
      </Card>
    </Colxx>
  );
};

export default FoodCard;
