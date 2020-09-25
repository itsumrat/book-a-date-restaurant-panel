import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import FoodCards from '../../../containers/products/FoodCards';
import products from '../../../data/products';
import AddNewModal from '../../../containers/pages/AddNewModal';
import IntlMessages from '../../../helpers/IntlMessages';
import Button from 'reactstrap/es/Button';

const Starters = ({ intl, match }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const starters = products.filter((pro) => pro.category === 'starter' && pro.active===true);
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.starters" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Row className="justify-content-end">
            <Button
              color="primary"
              size="lg"
              className="top-right-button flex"
              onClick={() => setModalOpen(true)}
            >
              <IntlMessages id="pages.add-new" />
            </Button>
          </Row>
        </Colxx>
      </Row>
      <AddNewModal
        modalOpen={modalOpen}
        toggleModal={() => setModalOpen(!modalOpen)}
        // categories={categories}
      />
      <FoodCards products={starters} />
    </>
  );
};
export default injectIntl(Starters);
