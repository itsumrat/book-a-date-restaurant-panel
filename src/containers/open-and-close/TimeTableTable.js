import React from 'react';
import { Card, CardBody, CardTitle, ModalBody, Table } from 'reactstrap';
import Select from 'react-select';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
import CustomSelectInput from '../../components/common/CustomSelectInput';
import produtcs from '../../data/products';

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const munites = [0, 15, 30, 45];

const TimeTableTable = () => {
  return (
    <Colxx>
      <Card className="mb-4">
        <CardBody>
          <CardTitle>
            <IntlMessages id="open-close-hour.time-table" />
          </CardTitle>
          <Table bordered>
            <thead>
              <tr>
                <th>Day of Weeks</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Friday</th>
                <td className="d-inline-flex ">
                  <Select
                    components={{ Input: CustomSelectInput }}
                    className="react-select"
                    classNamePrefix="react-select"
                    name="form-field-name"
                    defaultValue="0"
                    options={hours.map((x, i) => {
                      return { label: x, value: x, key: i };
                    })}
                  />
                  <Select
                    components={{ Input: CustomSelectInput }}
                    className="react-select"
                    classNamePrefix="react-select"
                    name="form-field-name"
                    defaultValue="0"
                    options={munites.map((x, i) => {
                      return { label: x, value: x, key: i };
                    })}
                  />
                </td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">Saturday</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">Sunday</th>
                <td>Larry</td>
                <td>the Bird</td>
              </tr>
              <tr>
                <th scope="row">Monday</th>
                <td>Larry</td>
                <td>the Bird</td>
              </tr>
              <tr>
                <th scope="row">Tuesday</th>
                <td>Larry</td>
                <td>the Bird</td>
              </tr>
              <tr>
                <th scope="row">Wednesday</th>
                <td>Larry</td>
                <td>the Bird</td>
              </tr>
              <tr>
                <th scope="row">Thursday</th>
                <td>Larry</td>
                <td>the Bird</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Colxx>
  );
};

export default TimeTableTable;
