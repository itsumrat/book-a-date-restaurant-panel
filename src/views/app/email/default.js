import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import EmailForm from '../../../containers/email/EmailForm';
import EmailTemplateText from '../../../containers/email/EmailTemplateTextForm';
import ComponentsUi from '../ui/forms/components';
import SpecialDays from '../../../containers/email/SpecialDays';
import IntlMessages from '../../../helpers/IntlMessages';
import UserForm from '../../../containers/team/UserForm';
import SpecialDayForm from '../../../containers/email/SpecialDayForm';

const EmailDefault = ({ intl, match }) => {
  const [modalBasic, setModalBasic] = useState(false);
  const [specialDays, setSpecialDays] = useState([
    {
      day: 'Valentine Day',
      status: 'Open',
      date: new Date(),
      campaign: 'Morning Shift',
    },
    {
      day: 'Mothers Day',
      status: 'Open',
      date: new Date(),
      campaign: 'Evening Shift',
    },
    {
      day: 'Fathers Day',
      status: 'Close',
      date: new Date(),
      campaign: 'No Shift',
    },
  ]);
  const onSubmit = (values) => {
    console.log(values);
  };
  const onSpecialDaySubmit = (values) => {
    console.log(values)
    setSpecialDays((state) => {
      return [...state, values];
    });
  }
  const handleAddSpecialDay = () => {
    setModalBasic(true)
  }
  const closeModal = () => {
    setModalBasic(false);
  };
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.email" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx md="6" className="mb-4">
          <EmailForm />
        </Colxx>
        <Colxx md="6" className="mb-4">
          <SpecialDays
            data={specialDays}
            handleAddSpecialDay={handleAddSpecialDay}
          />
        </Colxx>
        <Colxx md="12" className="mb-4">
          <EmailTemplateText onSubmit={onSubmit} />
        </Colxx>
      </Row>

      <Modal isOpen={modalBasic} toggle={() => setModalBasic(!modalBasic)}>
        <ModalHeader>
          <IntlMessages id="modal.add-special-day" />
        </ModalHeader>
        <ModalBody>
          <SpecialDayForm
            onSubmit={onSpecialDaySubmit}
            closeModal={closeModal}
          />
        </ModalBody>
      </Modal>
    </>
  );
};
export default injectIntl(EmailDefault);
