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
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Telephone</th>
                  <th>Email</th>
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
                          style={{ width: '100%', height: '50px' }}
                          alt="Thumbnail"
                          src={order.img}
                          className="list-thumbnail responsive border-0 card-img-left"
                        />
                      </td>
                      <td>
                        <h3>{order.name}</h3>
                      </td>
                      <td>
                        <span>{order.phone}</span>
                      </td>
                      <td>
                        <span>{order.email}</span>
                      </td>
                      <td> {moment(new Date(order.date)).format('h:mm a')}</td>
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
