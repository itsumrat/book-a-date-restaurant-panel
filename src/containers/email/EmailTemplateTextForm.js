import React from 'react';
import { Button, Card, CardBody, FormGroup, Label } from 'reactstrap';
import { Field, Form, Formik } from 'formik';
import Row from 'reactstrap/es/Row';

const EmailTemplateTextForm = ({ onSubmit }) => {
  const validate = (values) => {
    const errors = {};

    //
    // if (!values.booking_email) {
    //   errors.booking_email = 'Please enter your booking_email';
    // } else if (values.booking_email === 'admin') {
    //   errors.booking_email = 'Value must be longer than 2 characters';
    // }

    return errors;
  };
  return (
    <Card>
      <CardBody>
        <h6 className="mb-4">Email Texts</h6>
        <Formik
          validate={validate}
          initialValues={{
            booking_email: '',
            confirmation_email: '',
            reschedule_email: '',
          }}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, isValidating, setFieldValue }) => (
            <Form className="av-tooltip tooltip-label-right">
              <FormGroup>
                <Label>Booking Email</Label>
                <Field
                  className="form-control"
                  as="textarea"
                  rows="5"
                  name="booking_email"
                />
                {errors.booking_email && touched.booking_email && (
                  <div className="invalid-feedback d-block">
                    {errors.booking_email}
                  </div>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Confirmation Email</Label>
                <Field
                  className="form-control"
                  as="textarea"
                  rows="5"
                  name="confirmation_email"
                />
                {errors.confirmation_email && touched.confirmation_email && (
                  <div className="invalid-feedback d-block">
                    {errors.confirmation_email}
                  </div>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Reschedule Email</Label>
                <Field
                  className="form-control"
                  as="textarea"
                  rows="5"
                  name="reschedule_email"
                />
                {errors.reschedule_email && touched.reschedule_email && (
                  <div className="invalid-feedback d-block">
                    {errors.reschedule_email}
                  </div>
                )}
              </FormGroup>

              <Row className="d-flex flex-row-reverse">
                <Button className="mr-3" color="primary" type="submit">
                  Submit
                </Button>
                {/*<Button*/}
                {/*  className="mr-3"*/}
                {/*  onClick={handleClear}*/}
                {/*  color="danger"*/}
                {/*  type="submit"*/}
                {/*>*/}
                {/*  Clear*/}
                {/*</Button>*/}
              </Row>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
};

export default EmailTemplateTextForm;
