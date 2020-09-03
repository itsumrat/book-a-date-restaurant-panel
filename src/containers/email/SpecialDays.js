import React from 'react';
import Card from 'reactstrap/es/Card';
import CardTitle from 'reactstrap/es/CardTitle';
import Button from 'reactstrap/es/Button';
import Row from 'reactstrap/es/Row';
import CardBody from 'reactstrap/es/CardBody';
import { Table } from 'reactstrap';
import moment from 'moment';
import { Colxx } from '../../components/common/CustomBootstrap';

const SpecialDays = ({ data, handleAddSpecialDay }) => {
  return (
    <Card>
      <CardTitle className="m-3">
        <Row className="d-flex">
          <Colxx>Special Days</Colxx>
          <Colxx className="d-flex flex-row-reverse">
            <Button onClick={handleAddSpecialDay} color="primary" className="mb-2">
              Add
            </Button>
          </Colxx>
        </Row>
      </CardTitle>
      <CardBody>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Day</th>
              <th>Date</th>
              <th>Campaign</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={d.day}>
                <th scope="row">{i}</th>
                <td>{d.status}</td>
                <td>{d.day}</td>
                <td>{moment(new Date(d.date)).format('LLLL')}</td>
                <td>{d.campaign}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default SpecialDays;
