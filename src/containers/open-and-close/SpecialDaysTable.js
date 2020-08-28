import React from 'react';
import { Card, CardBody, CardTitle, Table } from 'reactstrap';
import Row from 'reactstrap/es/Row';
import Select from 'react-select';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
import CustomSelectInput from '../../components/common/CustomSelectInput';

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const munites = [0, 15, 30, 45];

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
                <th>Day of Weeks</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Friday</th>
                <td>
                  <Row lg="12">
                    <Colxx>
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
                    </Colxx>
                    <Colxx>
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
                    </Colxx>
                  </Row>
                </td>
                <td>
                  <Row lg="12">
                    <Colxx>
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
                    </Colxx>
                    <Colxx>
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
                    </Colxx>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope="row">Saturday</th>
                <td>
                  <Row lg="12">
                    <Colxx>
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
                    </Colxx>
                    <Colxx>
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
                    </Colxx>
                  </Row>
                </td>
                <td>
                  <Row lg="12">
                    <Colxx>
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
                    </Colxx>
                    <Colxx>
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
                    </Colxx>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope="row">Sunday</th>
                <td>
                  <Row lg="12">
                    <Colxx>
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
                    </Colxx>
                    <Colxx>
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
                    </Colxx>
                  </Row>
                </td>
                <td>
                  <Row lg="12">
                    <Colxx>
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
                    </Colxx>
                    <Colxx>
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
                    </Colxx>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope="row">Monday</th>
                <td>
                  <Row lg="12">
                    <Colxx>
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
                    </Colxx>
                    <Colxx>
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
                    </Colxx>
                  </Row>
                </td>
                <td>
                  <Row lg="12">
                    <Colxx>
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
                    </Colxx>
                    <Colxx>
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
                    </Colxx>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope="row">Tuesday</th>
                <td>
                  <Row lg="12">
                    <Colxx>
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
                    </Colxx>
                    <Colxx>
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
                    </Colxx>
                  </Row>
                </td>
                <td>
                  <Row lg="12">
                    <Colxx>
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
                    </Colxx>
                    <Colxx>
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
                    </Colxx>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope="row">Wednesday</th>
                <td>
                  <Row lg="12">
                    <Colxx>
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
                    </Colxx>
                    <Colxx>
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
                    </Colxx>
                  </Row>
                </td>
                <td>
                  <Row lg="12">
                    <Colxx>
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
                    </Colxx>
                    <Colxx>
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
                    </Colxx>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope="row">Thursday</th>
                <td>
                  <Row lg="12">
                    <Colxx>
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
                    </Colxx>
                    <Colxx>
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
                    </Colxx>
                  </Row>
                </td>
                <td>
                  <Row lg="12">
                    <Colxx>
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
                    </Colxx>
                    <Colxx>
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
                    </Colxx>
                  </Row>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Colxx>
  );
};

export default SpecialDaysTable;
