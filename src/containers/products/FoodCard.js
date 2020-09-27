import React, { useState } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  UncontrolledDropdown,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { Colxx } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';
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
          {product.active && (
            <Badge
              color={product.statusColor}
              pill
              className="position-absolute badge-top-left"
            >
              Advertised
            </Badge>
          )}
          {product.active && (
            <UncontrolledDropdown
              direction="left"
              style={{ top: 0, right: '-8px' }}
              className="position-absolute badge-top-right"
            >
              <DropdownToggle className="m-0" style={{ padding: '5px 10px' }}>
                :
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Deactivate</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          )}
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

              {product.active ? (
                <button
                  onClick={() => setModalBasic(true)}
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                  type="button"
                  className="btn btn-link"
                >
                  Make Advertise
                </button>
              ) : (
                <Button>Activated</Button>
              )}
            </Colxx>
          </Row>
        </CardBody>
      </Card>
      <Modal isOpen={modalBasic} toggle={() => setModalBasic(!modalBasic)}>
        <ModalHeader>
          {/* <IntlMessages id="modal.modal-title" /> */}
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
                <p>Finish</p>
                <DatePicker
                  selected={finishDateLO}
                  onChange={(val) => setFinishDateLO(val)}
                />
              </div>
            </Colxx>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setModalBasic(false)}>
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={() => setModalBasic(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Colxx>
  );
};

export default FoodCard;
