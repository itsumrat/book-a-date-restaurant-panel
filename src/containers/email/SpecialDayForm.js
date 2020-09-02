import React from 'react';
import { Button, Card, CardBody, FormGroup, Label } from 'reactstrap';
import { Field, Form, Formik } from 'formik';
import Row from 'reactstrap/es/Row';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SpecialDayForm = ({ onSubmit, closeModal }) => {
  const validate = (values) => {
    const errors = {};


    return errors;
  };

  return(
    <Card>
      <CardBody>
        <Formik
          validate={validate}
          initialValues={{
            day: '',
            status: '',
            date: new Date(),
            shift: '',
          }}
          onSubmit={onSubmit}
        >
          {({ values, handleChange, errors, touched, isValidating, setFieldValue }) => (
            <Form className="av-tooltip tooltip-label-right">
              <FormGroup>
                <Label>Status</Label>
                <Field
                  className="form-control"
                  required
                  as="select"
                  name="status"
                  value={values.gender}
                  onChange={(event) =>
                    setFieldValue('status', event.target.value)
                  }
                >
                  <option value="" disabled="disabled">
                    Select status
                  </option>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </Field>
                {errors.status && touched.status && (
                  <div className="invalid-feedback d-block">{errors.status}</div>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Day</Label>
                <Field className="form-control" name="day" />
                {errors.day && touched.day && (
                  <div className="invalid-feedback d-block">{errors.day}</div>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Date</Label>
                <DatePicker
                  name="date"
                  selected={values.date}
                  onChange={(date)=>{
                    handleChange('date');
                    setFieldValue('date', date);
                  }}
                />
                {errors.date && touched.date && (
                  <div className="invalid-feedback d-block">{errors.date}</div>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Shift</Label>
                <Field
                  className="form-control"
                  required
                  as="select"
                  name="shift"
                  value={values.gender}
                  onChange={(event) =>
                    setFieldValue('shift', event.target.value)
                  }
                >
                  <option value="" disabled="disabled">
                    Select shift
                  </option>
                  <option value="NO_shift">No Shift</option>
                  <option value="morning shift">Morning Shift</option>
                  <option value="evening shift">Evening Shift</option>
                  <option value="night shift">Night Shift</option>
                </Field>
                {errors.shift && touched.shift && (
                  <div className="invalid-feedback d-block">{errors.shift}</div>
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
  )
}

export default SpecialDayForm