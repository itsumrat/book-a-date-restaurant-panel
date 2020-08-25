import React from 'react';
import { Card, CardBody, FormGroup, Label } from 'reactstrap';
import { Field, Form, Formik } from 'formik';
import Row from 'reactstrap/es/Row';
import CustomInput from 'reactstrap/es/CustomInput';
import { Colxx } from '../../components/common/CustomBootstrap';
import { FormikRadioButtonGroup } from '../form-validations/FormikFields';

const options = [
  { value: 'client', label: 'Client' },
  { value: 'administrator', label: 'Administrator' },
];
const clientOptions = [
  { value: 'booking-mail', label: 'Send booking mail' },
  { value: 'confirmation-mail', label: 'Send confirmation mail' },
  { value: 'reschedule-mail', label: 'send reschedule mail' },
];
const EmailTemplateTextForm = ({ onSubmit }) => {
  // eslint-disable-next-line no-unused-vars
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
            recipient: '',
            sendBooking: false,
            sendRescheduleMail: false,
            sendConfirmationMail: false,
          }}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            // eslint-disable-next-line no-unused-vars
            isValidating,
            setFieldValue,
            setFieldTouched,
            handleBlur,
            handleChange,
          }) => (
            <Form className="av-tooltip tooltip-label-right">
              <Row>
                <Colxx lg="6" md="6">
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
                    {errors.confirmation_email &&
                      touched.confirmation_email && (
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
                </Colxx>
                <Colxx lg="2" md="2">
                  <FormGroup className="error-l-150">
                    <Label className="d-block">Recipient</Label>
                    <FormikRadioButtonGroup
                      name="recipient"
                      id="radioGroup"
                      label="One of these please"
                      value={values.recipient}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      options={options}
                    />
                    {errors.recipient && touched.recipient ? (
                      <div className="invalid-feedback d-block">
                        {errors.recipient}
                      </div>
                    ) : null}
                  </FormGroup>
                </Colxx>
                <Colxx lg="3" md="3">
                  <Row>
                    <Colxx>
                      <FormGroup className="error-l-150">
                        <Label className="d-block">
                          Message sent to Client
                        </Label>
                        <FormikRadioButtonGroup
                          name="client"
                          id="radioClient"
                          label="One of these please"
                          value={values.client}
                          onChange={setFieldValue}
                          onBlur={setFieldTouched}
                          options={clientOptions}
                        />
                        {errors.client && touched.client ? (
                          <div className="invalid-feedback d-block">
                            {errors.client}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Colxx>
                    <Colxx>
                      <FormGroup className="error-l-150">
                        <Label>Message sent to Client</Label>
                        <CustomInput
                          className="custom-switch custom-switch-primary"
                          type="switch"
                          id="sendBookingId"
                          name="sendBooking"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.sendBooking}
                          inline
                        />
                      </FormGroup>
                      <FormGroup className="error-l-150">
                        <CustomInput
                          type="switch"
                          id="sendConfirmationMailId"
                          name="sendConfirmationMail"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.sendConfirmationMail}
                          inline
                        />
                      </FormGroup>
                      <FormGroup className="error-l-150">
                        <CustomInput
                          type="switch"
                          id="sendRescheduleMailId"
                          name="sendRescheduleMail"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.sendRescheduleMail}
                          inline
                        />
                      </FormGroup>
                    </Colxx>
                  </Row>
                </Colxx>
              </Row>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
};

export default EmailTemplateTextForm;
