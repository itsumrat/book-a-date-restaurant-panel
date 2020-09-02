import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  FormGroup,
  Button,
  Form,
  Input,
} from 'reactstrap';

import ReactQuill from 'react-quill';
import { Colxx } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

const quillModules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
};
const quillFormats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];

const EmailForm = () => {
  const [textQuillStandart, setTextQuillStandart] = useState('');
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <IntlMessages id="email.email-form" />
        </CardTitle>
        <Form className="dashboard-quick-post">
          <FormGroup row>
            {/* <Label > */}
            {/*  <IntlMessages id="dashboards.title" /> */}
            {/* </Label> */}
            <Colxx style={{ marginBottom: 20 }} md={8}>
              <Input placeholder="To" type="text" name="text" />
            </Colxx>
            <hr />
            <Colxx md={8}>
              <Input placeholder="Subject" type="text" name="text" />
            </Colxx>
            <Colxx md={4}>
              <UncontrolledDropdown>
                <DropdownToggle color="" className="btn btn-header-primary">
                  Template
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <IntlMessages id="dashboards.sales" />
                  </DropdownItem>
                  <DropdownItem>
                    <IntlMessages id="dashboards.orders" />
                  </DropdownItem>
                  <DropdownItem>
                    <IntlMessages id="dashboards.refunds" />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Colxx>
          </FormGroup>

          <FormGroup row>
            {/* <Label sm="3"> */}
            {/*  <IntlMessages id="dashboards.content" /> */}
            {/* </Label> */}
            <Colxx>
              <ReactQuill
                theme="snow"
                value={textQuillStandart}
                onChange={(val) => setTextQuillStandart(val)}
                modules={quillModules}
                formats={quillFormats}
              />
            </Colxx>
          </FormGroup>

          <Button className="float-right" color="primary">
            <IntlMessages id="email.send" />
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};
export default EmailForm;
