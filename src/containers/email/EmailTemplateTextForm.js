import React, { useState } from 'react';
import { Card, CardBody, FormGroup, Label } from 'reactstrap';
import { Field, Form, Formik } from 'formik';
import Row from 'reactstrap/es/Row';
import CustomInput from 'reactstrap/es/CustomInput';
import Switch from 'rc-switch/es';
import Button from 'reactstrap/es/Button';
import { Colxx } from '../../components/common/CustomBootstrap';
import { FormikRadioButtonGroup } from '../form-validations/FormikFields';

const options = [
  { value: 'customer', label: 'Customer' },
  { value: 'administrator', label: 'Administrator' },
];
const clientOptions = [
  { value: 'booking-mail', label: 'Send booking mail' },
  { value: 'confirmation-mail', label: 'Send confirmation mail' },
  { value: 'reschedule-mail', label: 'send reschedule mail' },
  { value: 'payment_confirmation', label: 'send payment confirmation mail' },
  { value: 'cancellation-mail', label: 'send cancellation mail' },
];
const EmailTemplateTextForm = ({ onSubmit }) => {
  const [sendBooking, setSendBooking] = useState(false);
  const [sendRescheduleMail, setsendRescheduleMail] = useState(false);
  const [sendConfirmationMail, setSendConfirmationMail] = useState(false);
  const [sendPaymentConfirmMail, setsendPaymentConfirmMail] = useState(false);
  const [sendCancellationMail, setsendCancellationMail] = useState(false);
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
            booking_email:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
            confirmation_email:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            reschedule_email:
              'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
            payment_confirmation_message:
              'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
            cancellation_message:
              'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
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
                <Colxx lg="12" md="12">
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
                    <Button color="primary" className=" m-3 float-right">
                      Save
                    </Button>
                  </FormGroup>
                  <FormGroup className="mt-5">
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
                    <Button color="primary" className=" m-3 float-right">
                      Save
                    </Button>
                  </FormGroup>
                  <FormGroup className="mt-5">
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
                    <Button color="primary" className=" m-3 float-right">
                      Save
                    </Button>
                  </FormGroup>
                  <FormGroup className="mt-5">
                    <Label>Payment Confirmation Email</Label>
                    <Field
                      className="form-control"
                      as="textarea"
                      rows="5"
                      name="payment_confirmation_message"
                    />
                    {errors.payment_confirmation_message &&
                      touched.payment_confirmation_message && (
                        <div className="invalid-feedback d-block">
                          {errors.payment_confirmation_message}
                        </div>
                      )}
                    <Button color="primary" className=" m-3 float-right">
                      Save
                    </Button>
                  </FormGroup>
                  <FormGroup className="mt-5">
                    <Label>Cancellation Email</Label>
                    <Field
                      className="form-control"
                      as="textarea"
                      rows="5"
                      name="cancellation_message"
                    />
                    {errors.cancellation_message &&
                      touched.cancellation_message && (
                        <div className="invalid-feedback d-block">
                          {errors.reschedule_email}
                        </div>
                      )}
                    <Button color="primary" className=" m-3 float-right">
                      Save
                    </Button>
                  </FormGroup>
                </Colxx>
                {/* <Colxx lg="2" md="2"> */}
                {/*  <FormGroup className="error-l-150"> */}
                {/*    <Label className="d-block">Recipient</Label> */}
                {/*    <FormikRadioButtonGroup */}
                {/*      name="recipient" */}
                {/*      id="radioGroup" */}
                {/*      label="One of these please" */}
                {/*      value={values.recipient} */}
                {/*      onChange={setFieldValue} */}
                {/*      onBlur={setFieldTouched} */}
                {/*      options={options} */}
                {/*    /> */}
                {/*    {errors.recipient && touched.recipient ? ( */}
                {/*      <div className="invalid-feedback d-block"> */}
                {/*        {errors.recipient} */}
                {/*      </div> */}
                {/*    ) : null} */}
                {/*  </FormGroup> */}
                {/* </Colxx> */}
                {/* <Colxx lg="3" md="3"> */}
                {/*  <Row> */}
                {/*    <Colxx> */}
                {/*      <FormGroup className="error-l-150"> */}
                {/*        <Label className="d-block"> */}
                {/*          Message sent to Client */}
                {/*        </Label> */}
                {/*        <FormikRadioButtonGroup */}
                {/*          name="customer" */}
                {/*          id="radioClient" */}
                {/*          label="One of these please" */}
                {/*          value={values.customer} */}
                {/*          onChange={setFieldValue} */}
                {/*          onBlur={setFieldTouched} */}
                {/*          options={clientOptions} */}
                {/*        /> */}
                {/*        {errors.client && touched.client ? ( */}
                {/*          <div className="invalid-feedback d-block"> */}
                {/*            {errors.client} */}
                {/*          </div> */}
                {/*        ) : null} */}
                {/*      </FormGroup> */}
                {/*    </Colxx> */}
                {/*    <Colxx> */}
                {/*      <FormGroup className="error-l-150"> */}
                {/*        <Label>Status</Label> */}
                {/*        <Switch */}
                {/*          className="custom-switch custom-switch-primary" */}
                {/*          checked={sendBooking} */}
                {/*          onChange={(primary) => setSendBooking(primary)} */}
                {/*        /> */}
                {/*      </FormGroup> */}
                {/*      <FormGroup className="error-l-150"> */}
                {/*        <Switch */}
                {/*          className="custom-switch custom-switch-primary" */}
                {/*          checked={sendConfirmationMail} */}
                {/*          onChange={(primary) => */}
                {/*            setSendConfirmationMail(primary) */}
                {/*          } */}
                {/*        /> */}
                {/*      </FormGroup> */}
                {/*      <FormGroup className="error-l-150"> */}
                {/*        <Switch */}
                {/*          className="custom-switch custom-switch-primary" */}
                {/*          checked={sendRescheduleMail} */}
                {/*          onChange={(primary) => setsendRescheduleMail(primary)} */}
                {/*        /> */}
                {/*      </FormGroup> */}
                {/*      <FormGroup className="error-l-150"> */}
                {/*        <Switch */}
                {/*          className="custom-switch custom-switch-primary" */}
                {/*          checked={sendPaymentConfirmMail} */}
                {/*          onChange={(primary) => setsendPaymentConfirmMail(primary)} */}
                {/*        /> */}
                {/*      </FormGroup> */}
                {/*      <FormGroup className="error-l-150"> */}
                {/*        <Switch */}
                {/*          className="custom-switch custom-switch-primary" */}
                {/*          checked={sendCancellationMail} */}
                {/*          onChange={(primary) => setsendCancellationMail(primary)} */}
                {/*        /> */}
                {/*      </FormGroup> */}
                {/*    </Colxx> */}
                {/*  </Row> */}
                {/* </Colxx> */}
              </Row>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
};

export default EmailTemplateTextForm;
