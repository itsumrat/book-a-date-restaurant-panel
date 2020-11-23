import React from 'react';
import { Card, CardBody, CardTitle, Table } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';
import orders from '../../data/orders';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Row from 'reactstrap/es/Row';
import CardText from 'reactstrap/es/CardText';
import Badge from 'reactstrap/es/Badge';

const NewRestaurantReservations = ({ data }) => {
  return (
    <Card className="mb-4">
      <CardBody>
        <CardTitle>
          <IntlMessages id="table.confirmed-reservations" />
        </CardTitle>
        {/*<Row>*/}
        {/*  <Colxx md="4">*/}
        {/*    <CardTitle>Profile Photo</CardTitle>*/}
        {/*  </Colxx>*/}
        {/*  <Colxx md="8">*/}
        {/*    <CardTitle>Name</CardTitle>*/}
        {/*  </Colxx>*/}
        {/*</Row>*/}
        {orders.map((order, ind) => (
          <div key={ind}>
            <CardBody>
              <Row>
                <Colxx md="4">
                  <img
                    style={{ minWidth: '100%' }}
                    alt="Thumbnail"
                    src={order.img}
                    className="list-thumbnail responsive border-0 card-img-left"
                  />
                </Colxx>
                <Colxx md="8">
                  <CardTitle>{order.name}</CardTitle>
                  <CardText>{order.email} <br/> {`${new Date(new Date() - new Date(order.date)).getDate()} days ago`} </CardText>
                </Colxx>
                <Colxx>
                  <Badge color={order.statusColor} pill>{order.status}</Badge>
                </Colxx>
              </Row>
            </CardBody>
            {!(ind === orders.length -1) && <Separator/>}
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default React.memo(NewRestaurantReservations);
