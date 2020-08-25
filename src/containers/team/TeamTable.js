import React from 'react';
import { Card, CardBody, CardTitle, Table } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';

const TeamTable = ({ data }) => {
  return (
    <Card className="mb-4">
      <CardBody>
        <CardTitle>
          <IntlMessages id="table.team" />
        </CardTitle>

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Title</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Access</th>
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

export default TeamTable;
