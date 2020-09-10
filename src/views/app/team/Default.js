import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import TeamTable from '../../../containers/team/TeamTable';
import IntlMessages from '../../../helpers/IntlMessages';
import UserForm from '../../../containers/team/UserForm';

const TeamDefault = ({ intl, match }) => {
  const { messages } = intl;
  const [searchKeyword, setSearchKeyword] = useState('');
  const [modalBasic, setModalBasic] = useState(false);
  const [team, setTeam] = useState([
    {
      name: 'Sarah Kortney',
      email: 'sarah@bookadate.com',
      title: 'Restaurant Owner',
      access: 'ALL_ACCESS',
      phone: '132456895',
    },
    {
      title: 'Restaurant Manager',
      email: 'tom@bookadate.com',
      name: 'Tom Jones',
      access: '2nd Access',
      phone: '65498415694',
    },
  ]);

  const onSubmit = (values) => {
    console.log(values);
    setTeam((state) => {
      return [...state, values];
    });
    setModalBasic(false);
  };

  const search = () => {
    console.log(searchKeyword);
    setSearchKeyword('');
  };
  const handleSearchInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const closeModal = () => {
    setModalBasic(false);
  };

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.team" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx>
          <Row>
            <Colxx lg="3" xxs="12" sm="12">
              <div className="search" data-search-path="/app/pages/search">
                <Input
                  name="searchKeyword"
                  id="searchKeyword"
                  placeholder={messages['menu.search']}
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  onKeyPress={(e) => handleSearchInputKeyPress(e)}
                />
              </div>
            </Colxx>
            <Colxx className="d-flex flex-row-reverse">
              <Button
                onClick={() => setModalBasic(true)}
                color="primary"
                className="mb-2"
              >
                <IntlMessages id="button.add-new-user" />
              </Button>
            </Colxx>
          </Row>
          <Row>
            <Colxx>
              <TeamTable data={team} />
            </Colxx>
          </Row>
        </Colxx>
      </Row>

      <Modal isOpen={modalBasic} toggle={() => setModalBasic(!modalBasic)}>
        <ModalHeader>
          <IntlMessages id="modal.add-new-user" />
        </ModalHeader>
        <ModalBody>
          <UserForm closeModal={closeModal} onSubmit={onSubmit} />
        </ModalBody>
      </Modal>
    </>
  );
};
export default injectIntl(TeamDefault);
