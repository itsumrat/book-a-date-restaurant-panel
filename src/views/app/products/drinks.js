import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Button, Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import FoodCards from '../../../containers/products/FoodCards';
import products from '../../../data/products';
import AddNewModal from '../../../containers/pages/AddNewModal';
import IntlMessages from '../../../helpers/IntlMessages';

// const categories = [
//   { label: 'Starter', value: 'Starter', key: 0 },
//   { label: 'Mains', value: 'Mains', key: 1 },
//   { label: 'Drinks', value: 'Drinks', key: 2 },
//   { label: 'Desserts', value: 'Desserts', key: 3 },
// ];

const Drinks = ({ intl, match }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const drinks = products.filter((pro) => pro.category === 'drinks' && pro.active===true);
  return (
    <Row>
      <Colxx>
        <Row>
          <Colxx xxs="12">
            <Row>
              <Breadcrumb heading="menu.drinks" match={match} />
            </Row>

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
        <FoodCards products={drinks} />
      </Colxx>
    </Row>
  );
};
export default injectIntl(Drinks);
