import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import EmailForm from '../../../containers/email/EmailForm';
import EmailTemplateText from '../../../containers/email/EmailTemplateTextForm';

const Email = ({ intl, match }) => {
  const onSubmit = (values) => {
    console.log(values);
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
        <Colxx md="12" className="mb-4">
          <EmailTemplateText onSubmit={onSubmit} />
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(Email);
