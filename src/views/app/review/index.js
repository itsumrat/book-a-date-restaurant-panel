import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import Blog from '../blog';

const Review = ({ intl, match }) => {
  return (
    // <>
    //   <Row>
    //     <Colxx xxs="12">
    //       <Breadcrumb heading="menu.review" match={match} />
    //       <Separator className="mb-5" />
    //     </Colxx>
    //   </Row>
    //   <Row>
    //     <h1>Review Page</h1>
    //   </Row>
    // </>
    <Blog intl={intl} match={match} />
  );
};
export default injectIntl(Review);
