import React from 'react';
import { Card, CardBody, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';

const ReservationCard = ({ header, title, value }) => {
  return (
    <Card>
      <CardBody>
        <Row className="d-flex justify-content-between">
          <div className="card-text font-weight-semibold m-2 color-theme-1">{header}</div>
        </Row>
        <Separator className="mb-3" />
        <Row>
          <Colxx>
            <p className="lead font-weight-bolder">{value}</p>
            <p className="card-text font-weight-semibold mb-0">{title}</p>
          </Colxx>
        </Row>
      </CardBody>
    </Card>
  );
};
ReservationCard.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
export default React.memo(ReservationCard);
