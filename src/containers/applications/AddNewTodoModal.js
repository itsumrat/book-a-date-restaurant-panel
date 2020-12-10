import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  CustomInput,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from 'reactstrap';
import Select from 'react-select';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import CustomSelectInput from '../../components/common/CustomSelectInput';
import IntlMessages from '../../helpers/IntlMessages';

import { addTodoItem } from '../../redux/actions';

const initialState = {
  title: '',
  detail: '',
  label: {},
  category: {},
  status: 'PENDING',
  deadline: new Date(),
};

const AddNewTodoModal = ({
  modalOpen,
  toggleModal,
  labels,
  categories,
  addTodoItemAction,
}) => {
  const [state, setState] = useState(initialState);

  const addNetItem = () => {
    const newTodo = {
      title: state.title,
      detail: state.detail,
      label: state.label.value,
      labelColor: state.label.color,
      category: state.category.value,
      status: state.status,
      deadline: state.deadline,
    };
    addTodoItemAction(newTodo);
    toggleModal();
    setState(initialState);
  };

  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
    >
      <ModalHeader toggle={toggleModal}>
        <IntlMessages id="todo.add-new-title" />
      </ModalHeader>
      <ModalBody>
        <Label className="mt-4">
          <IntlMessages id="todo.title" />
        </Label>
        <Input
          type="text"
          defaultValue={state.title}
          onChange={(event) =>
            setState({ ...state, title: event.target.value })
          }
        />
        <Label className="mt-4">
          <IntlMessages id="todo.detail" />
        </Label>
        <Input
          type="textarea"
          defaultValue={state.detail}
          onChange={(event) =>
            setState({ ...state, detail: event.target.value })
          }
        />

        <Label className="mt-4">
          <IntlMessages id="todo.category" />
        </Label>
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          name="form-field-name"
          options={categories.map((x, i) => {
            return { label: x, value: x, key: i };
          })}
          value={state.category}
          onChange={(val) => setState({ ...state, category: val })}
        />
        <Label className="mt-4">
          <IntlMessages id="todo.team-members" />
        </Label>
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          name="form-field-name"
          options={labels.map((x, i) => {
            return {
              label: x.customerName,
              value: x.customerName,
              key: i,
              color: x.statusColor,
            };
          })}
          value={state.label}
          onChange={(val) => setState({ ...state, label: val })}
        />

        <Label className="mt-4">
          <IntlMessages id="todo.status" />
        </Label>
        <CustomInput
          type="radio"
          id="exCustomRadio"
          name="customRadio"
          label="COMPLETED"
          checked={state.status === 'COMPLETED'}
          onChange={(event) =>
            setState({
              ...state,
              status: event.target.value === 'on' ? 'COMPLETED' : 'PENDING',
            })
          }
        />
        <CustomInput
          type="radio"
          id="exCustomRadio2"
          name="customRadio2"
          label="PENDING"
          defaultChecked={state.status === 'PENDING'}
          onChange={(event) =>
            setState({
              ...state,
              status: event.target.value !== 'on' ? 'COMPLETED' : 'PENDING',
            })
          }
        />
        <Label className="mt-4">
          <IntlMessages id="todo.deadline" />
        </Label>
        <DatePicker
          selected={state.deadline}
          onChange={(deadline) => setState({ ...state, deadline })}
        />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" outline onClick={toggleModal}>
          <IntlMessages id="todo.cancel" />
        </Button>
        <Button color="primary" onClick={() => addNetItem()}>
          <IntlMessages id="todo.submit" />
        </Button>{' '}
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ todoApp }) => {
  const { labels, categories } = todoApp;
  return {
    labels,
    categories,
  };
};
export default connect(mapStateToProps, {
  addTodoItemAction: addTodoItem,
})(AddNewTodoModal);
