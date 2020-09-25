import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Button, Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import FoodCards from '../../../containers/products/FoodCards';
import products from '../../../data/products';
import IntlMessages from '../../../helpers/IntlMessages';
import AddNewModal from '../../../containers/pages/AddNewModal';

const Mains = ({ intl, match }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const mains = products.filter((pro) => pro.category === 'mains' && pro.active===true);
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.mains" match={match} />
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
        <FoodCards products={mains} />

    </>
  );
};
export default injectIntl(Mains);
