import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle, Form, Modal, ModalBody, ModalFooter, ModalHeader, Row
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Colxx } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FoodCard = ({ product }) => {
  const [modalBasic, setModalBasic] = useState(false);
  const [startDateLO, setStartDateLO] = useState(null);
  const [finishDateLO, setFinishDateLO] = useState(null);
  return (
    <Colxx xxs="12" xs="6" lg="4">
      <Card className="mb-4">
        <div className="position-relative">
          <NavLink to={`/app/products/details/${product.id}`}>
            <CardImg
              style={{ height: '275px' }}
              top
              src={product.img}
              alt="Card image cap"
            />
          </NavLink>
        </div>
        <CardBody>
          <NavLink to={`/app/products/details/${product.id}`}>
            <CardTitle className="mb-4"> {product.title} </CardTitle>
          </NavLink>
          <CardSubtitle className="mb-4">{product.description}</CardSubtitle>

          <Row>
            <Colxx className="d-inline-flex justify-content-between">
              <p className="text-muted text-small mb-0 font-weight-light">
                {`£ ${product.price}`}
              </p>

              <button
                onClick={() => setModalBasic(true)}
                style={{ paddingTop: 0, paddingBottom: 0 }}
                type="button"
                className="btn btn-link"
              >
                Request Submission
              </button>
            </Colxx>
          </Row>
        </CardBody>
      </Card>
      <Modal isOpen={modalBasic} toggle={() => setModalBasic(!modalBasic)}>
        <ModalHeader>
          {/*<IntlMessages id="modal.modal-title" />*/}
          <h5>Advertise Product</h5>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Colxx>
              <div className="form-group has-float-label">
                <p>Start</p>
                <DatePicker
                  selected={startDateLO}
                  onChange={(val) => setStartDateLO(val)}
                />
              </div>
              <div className="form-group has-float-label">
                <p >Finish</p>
                <DatePicker
                  selected={finishDateLO}
                  onChange={(val) => setFinishDateLO(val)}
                />
              </div>

            </Colxx>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => setModalBasic(false)}
          >
            Submit
          </Button>{' '}
          <Button
            color="secondary"
            onClick={() => setModalBasic(false)}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Colxx>
  );
};

export default FoodCard;
