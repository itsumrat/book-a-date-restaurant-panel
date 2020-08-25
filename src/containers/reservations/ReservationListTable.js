import React from 'react';
import { Card, CardBody, CardTitle, Table } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';

const ReservationListTable = ({ data }) => {
  return (
    <Card className="mb-4">
      <CardBody>
        <CardTitle>
          <IntlMessages id="table.reservation-list" />
        </CardTitle>

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Time</th>
              <th>Size</th>
              <th>Name</th>
              <th>Table</th>
              <th>Note</th>
              <th>Made</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={d.name}>
                <th scope="row">{i}</th>
                <td>{d.name}</td>
                <td>{d.title}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.access}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default React.memo(ReservationListTable);
