import React, { useState } from 'react';
import {
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';

const Register = ({ history }) => {
  const [step, setStep] = useState('step1');

  const onUserRegister = () => {};

  const formik = useFormik({
    initialValues: {
      fullname: '',
      password: '',
      confirm_password: '',
      email: '',
      company_name: '',
      telephone: '',
      first_line_address: '',
      second_line: '',
      postcode: '',
      logo: null,
      cuisine: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      history.push('/')
    },
  });

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
            <p className="white mb-0">
              Please use this form to register. <br />
              If you are a member, please{' '}
              <NavLink to="/user/login" className="white">
                login
              </NavLink>
              .
            </p>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages
                id={
                  step === 'step3'
                    ? 'user.restaurant-detail'
                    : step === 'step2'
                    ? 'user.register'
                    : 'user.account-setup'
                }
              />
            </CardTitle>
            <Form onSubmit={formik.handleSubmit}>
              {step === 'step1' && (
                <div>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.fullname" />
                    </Label>
                    <Input
                      name="fullname"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.fullname}
                    />
                  </FormGroup>

                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.email" />
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </FormGroup>

                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.password" />
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </FormGroup>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.confirm-password" />
                    </Label>
                    <Input
                      type="password"
                      name="confirm_password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.confirm_password}
                    />
                  </FormGroup>
                </div>
              )}
              {step === 'step2' && (
                <div>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.company-name" />
                    </Label>
                    <Input
                      type="text"
                      name="company_name"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.company_name}
                    />
                  </FormGroup>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.telephone" />
                    </Label>
                    <Input
                      type="text"
                      name="telephone"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.telephone}
                    />
                  </FormGroup>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.first-line-address" />
                    </Label>
                    <Input
                      type="text"
                      name="first_line_address"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.first_line_address}
                    />
                  </FormGroup>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.second-line" />
                    </Label>
                    <Input
                      type="text"
                      name="second_line"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.second_line}
                    />
                  </FormGroup>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.postcode" />
                    </Label>
                    <Input
                      type="text"
                      name="postcode"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.postcode}
                    />
                  </FormGroup>
                </div>
              )}
              {step === 'step3' && (
                <div>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.cuisine-style" />
                    </Label>
                    <Input
                      type="text"
                      name="cuisine_style"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.cuisine_style}
                    />
                  </FormGroup>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.logo" />
                    </Label>
                    <Input
                      type="file"
                      name="logo"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.logo}
                    />
                  </FormGroup>
                </div>
              )}

              <div className="flex justify-content-end align-items-center">
                {(step === 'step2' || step === 'step3') && (
                  <Button
                    style={{ marginRight: 30 }}
                    color="secondary"
                    className="btn-shadow"
                    size="lg"
                    onClick={() => {
                      if (step === 'step2') {
                        setStep('step1');
                      } else {
                        setStep('step2');
                      }
                    }}
                  >
                    <IntlMessages id="user.back" />
                  </Button>
                )}
                {(step === 'step1' || step === 'step2') && (
                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    type="button"
                    onClick={() => {
                      if (step === 'step1') {
                        setStep('step2');
                      } else {
                        setStep('step3');
                      }
                    }}
                  >
                    <IntlMessages id="user.next" />
                  </Button>
                )}
                {step === 'step3' && (
                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    type="submit"
                  >
                    <IntlMessages id="user.register-button" />
                  </Button>
                )}
              </div>
            </Form>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Register);
