import React from 'react';
import { Button, Card, CardBody, FormGroup, Label } from 'reactstrap';
import { Field, Form, Formik } from 'formik';
import Row from 'reactstrap/es/Row';

const UserForm = ({ onSubmit, closeModal }) => {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Please enter your email address';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.name) {
      errors.name = 'Please enter your name';
    } else if (values.name === 'admin') {
      errors.name = 'Value must be longer than 2 characters';
    }
    if (values.access === '') {
      errors.access = 'Please select permission';
    }
    return errors;
  };
  return (
    <Card>
      <CardBody>
        <h6 className="mb-4">Form Level Validation</h6>
        <Formik
          validate={validate}
          initialValues={{
            name: '',
            email: '',
            title: '',
            access: '',
            phone: '',
          }}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, isValidating, setFieldValue }) => (
            <Form className="av-tooltip tooltip-label-right">
              <FormGroup>
                <Label>Name</Label>
                <Field className="form-control" name="name" />
                {errors.name && touched.name && (
                  <div className="invalid-feedback d-block">{errors.name}</div>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Title</Label>
                <Field className="form-control" name="title" />
                {errors.title && touched.title && (
                  <div className="invalid-feedback d-block">{errors.title}</div>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Email</Label>
                <Field className="form-control" name="email" />
                {errors.email && touched.email && (
                  <div className="invalid-feedback d-block">{errors.email}</div>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Phone Number</Label>
                <Field className="form-control" name="phone" />
                {errors.phone && touched.phone && (
                  <div className="invalid-feedback d-block">{errors.phone}</div>
                )}
              </FormGroup>
              <FormGroup>
                <Field
                  className="form-control"
                  required
                  as="select"
                  name="access"
                  value={values.gender}
                  onChange={(event) =>
                    setFieldValue('access', event.target.value)
                  }
                >
                  <option value="" disabled="disabled">
                    Select Permission
                  </option>
                  <option value="ALL_ACCESS">All Access</option>
                  <option value="GROUP">Group</option>
                </Field>
                {errors.access && touched.access && (
                  <div className="invalid-feedback d-block">{errors.access}</div>
                )}
              </FormGroup>

              <Row className="d-flex flex-row-reverse">
                <Button className="mr-3" color="primary" type="submit">
                  Submit
                </Button>
                <Button
                  className="mr-3"
                  onClick={closeModal}
                  color="danger"
                  type="submit"
                >
                  Cancel
                </Button>
              </Row>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
};

export default UserForm;
