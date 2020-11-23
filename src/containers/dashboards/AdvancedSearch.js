/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Button,
  Label,
  Input,
  CustomInput,
} from 'reactstrap';
import Select from 'react-select';

import Row from 'reactstrap/es/Row';
import IntlMessages from '../../helpers/IntlMessages';
import CustomSelectInput from '../../components/common/CustomSelectInput';
import { Colxx } from '../../components/common/CustomBootstrap';

const selectData = [
  { label: 'Chocolate', value: 'chocolate', key: 0 },
  { label: 'Vanilla', value: 'vanilla', key: 1 },
  { label: 'Strawberry', value: 'strawberry', key: 2 },
  { label: 'Caramel', value: 'caramel', key: 3 },
  { label: 'Cookies and Cream', value: 'cookiescream', key: 4 },
  { label: 'Peppermint', value: 'peppermint', key: 5 },
];

const selectDataType = [
  { label: 'Starter', value: 'Starter', key: 0 },
  { label: 'Mains', value: 'Mains', key: 1 },
  { label: 'Drinks', value: 'Drinks', key: 2 },
  { label: 'Desserts', value: 'Desserts', key: 3 },
];

const AdvancedSearch = ({ messages }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionsType, setSelectedOptionsType] = useState([]);

  return (
    <Card className="dashboard-search">
      <Form className="form-container">
        <Row>
          <Colxx lg={3} md={3}>
            <FormGroup>
              <label>
                <IntlMessages id="dashboards.product-name" />
              </label>
              <Select
                components={{ Input: CustomSelectInput }}
                className="react-select"
                classNamePrefix="react-select"
                name="form-field-name"
                value={selectedOptions}
                onChange={(val) => setSelectedOptions(val)}
                options={selectData}
              />
            </FormGroup>
          </Colxx>
          <Colxx lg={3} md={3}>
            <FormGroup>
              <label>
                <IntlMessages id="dashboards.product-category" />
              </label>
              <Select
                components={{ Input: CustomSelectInput }}
                className="react-select"
                classNamePrefix="react-select"
                name="form-field-name"
                value={selectedOptionsType}
                onChange={(val) => setSelectedOptionsType(val)}
                options={selectDataType}
              />
            </FormGroup>
          </Colxx>
          <Colxx lg={3} md={3}>
            <FormGroup>
              <Label>
                <IntlMessages id="dashboards.customer-name" />
              </Label>
              <Input />
            </FormGroup>
          </Colxx>
          {/* <Colxx lg={2} md={3}> */}
          {/*  <FormGroup> */}
          {/*    <Label> */}
          {/*      <IntlMessages id="dashboards.guest-keyword" /> */}
          {/*    </Label> */}
          {/*    <Input type="text" placeholder={messages['dashboards.keyword']} /> */}
          {/*  </FormGroup> */}
          {/* </Colxx> */}
          {/* <Colxx lg={3} md={3} style={{ margin: 'auto' }}> */}
          {/*  <FormGroup> */}
          {/*    <CustomInput */}
          {/*      type="checkbox" */}
          {/*      id="exampleCustomCheckbox" */}
          {/*      label="Term" */}
          {/*    /> */}
          {/*  </FormGroup> */}
          {/* </Colxx> */}
          <Colxx lg={3} md={6}>
            <FormGroup className="text-center">
              <Button color="primary" className="btn-lg mt-3">
                <IntlMessages id="dashboards.search" />
              </Button>
            </FormGroup>
          </Colxx>
        </Row>
      </Form>
    </Card>
  );
};
export default AdvancedSearch;
