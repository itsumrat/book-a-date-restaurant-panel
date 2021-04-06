import React from 'react';
import { Card, CardBody, CardTitle, Table } from 'reactstrap';
import Row from 'reactstrap/es/Row';
import CardText from 'reactstrap/es/CardText';
import Badge from 'reactstrap/es/Badge';
import moment from 'moment';
import IntlMessages from '../../helpers/IntlMessages';
import orders from '../../data/orders';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';

const NewRestaurantReservations = ({ data }) => {
  return (
    <Row>
      <Colxx xxs={12}>
        <Card className="overflow-auto d-flex mb-4">
          <CardBody>
            <CardTitle>
              <IntlMessages id="table.confirmed-reservations" />
            </CardTitle>
            <Table>
              <thead>
                <tr>
                  <th />
                  <th />
                  <th>Time For Booking</th>
                  <th>Date For Booking</th>
                  <th>Price</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <img
                          style={{ minWidth: '100%', height: 100 }}
                          alt="Thumbnail"
                          src={order.img}
                          className="list-thumbnail responsive border-0 card-img-left"
                        />
                      </td>
                      <td>
                        <CardTitle>{order.name}</CardTitle>
                        <p>{order.phone}</p>
                        <CardTitle>{order.email}</CardTitle>
                      </td>
                      <td>
                        {' '}
                        {moment(new Date(order.date)).format('h:mm:ss a')}
                      </td>
                      <td>{moment().format('dd, MMM Do YY')}</td>
                      <td>£ {order.price}</td>
                      <td>{order.location}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Colxx>
    </Row>
  );
};

export default React.memo(NewRestaurantReservations);
