import React from 'react';
import { Card, CardBody, CardTitle, Table } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';

const SpecialDaysTable = () => {
  return (
    <Colxx>
      <Card className="mb-4">
        <CardBody>
          <CardTitle>
            <IntlMessages id="open-close-hour.special-days" />
          </CardTitle>
          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Colxx>
  );
};

export default SpecialDaysTable;
