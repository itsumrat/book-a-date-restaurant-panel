import React from 'react';
import { Card, CardBody, CardTitle, Row, Button, Badge } from 'reactstrap';
import { Separator } from '../../components/common/CustomBootstrap';

const LatestReservationsCard = () => {
  return (
    <Card>
      <CardTitle className="m-3">Latest Reservations</CardTitle>
      <Separator />
      <CardBody>
        <Row>
          <p>
            You received <strong>2</strong> reservation today
          </p>
        </Row>
        <Row className="flex-row-reverse">
          <Button>View Schedule</Button>
        </Row>
        <Row>
          <Card>
            <CardTitle>Calender</CardTitle>
            <CardBody>
              <Badge>Confirmed</Badge>
              <Separator className="m-0" />
            </CardBody>
          </Card>
        </Row>
      </CardBody>
    </Card>
  );
};

export default React.memo(LatestReservationsCard);
