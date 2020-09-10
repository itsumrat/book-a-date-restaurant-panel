import React from 'react';
import { Badge, Card, CardBody, Row } from 'reactstrap';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';

const ReservationYesterday = () => {
  return (
    <Card>
      <CardBody>
        <Row className="d-flex justify-content-between">
          <div className="card-text font-weight-semibold m-2">
            Reservations Yesterday
          </div>
          <div className="m-2">
            <Badge color="primary">Today</Badge>
          </div>
        </Row>
        <Separator className="mb-3" />
        <Row>
          <Colxx>
            <p className="lead font-weight-bolder">10</p>
            <p className="card-text font-weight-semibold mb-0">
              Total Reservations
            </p>
          </Colxx>
          <Colxx>
            <p className="lead font-weight-bolder">2</p>
            <p className="card-text font-weight-semibold mb-0">
              Reservations
            </p>
          </Colxx>
        </Row>
      </CardBody>
    </Card>
  );
};

export default React.memo(ReservationYesterday);
