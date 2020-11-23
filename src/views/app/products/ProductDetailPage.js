import React, { useState } from 'react';
import {
  Row,
  Card,
  CardTitle,
  CardBody,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  Badge,
  CardHeader,
  Table,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { injectIntl } from 'react-intl';

import IntlMessages from '../../../helpers/IntlMessages';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import GlideComponentThumbs from '../../../components/carousel/GlideComponentThumbs';
import { detailImages, detailThumbs } from '../../../data/carouselItems';
import { commentWithLikesData } from '../../../data/comments';
import CommentWithLikes from '../../../components/pages/CommentWithLikes';
import { detailsQuestionsData } from '../../../data/questions';
import QuestionAnswer from '../../../components/pages/QuestionAnswer';
import GalleryDetail from '../../../containers/pages/GalleryDetail';
import products from '../../../data/products';
import Rating from '../../../components/common/Rating';
import RadialProgressCard from '../../../components/cards/RadialProgressCard';
import SmallLineCharts from '../../../containers/dashboards/SmallLineCharts';
import WebsiteVisitsChartCard from '../../../containers/dashboards/WebsiteVisitsChartCard';
import NewComments from '../../../containers/dashboards/NewComments';
import Orders from '../../../containers/pages/Orders';
import AddNewModal from '../../../containers/pages/AddNewModal';

const ProductDetailPage = ({ match, intl }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [activeTabEx, setActiveTabEx] = useState('details');
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const product = products.find(
    (prod, i) => prod.id.toString() === match.params.id
  );
  const { messages } = intl;
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>{product && product.title}</h1>
          {/* <div className="text-zero top-right-button-container"> */}
          {/*  <UncontrolledDropdown> */}
          {/*    <DropdownToggle */}
          {/*      caret */}
          {/*      color="primary" */}
          {/*      size="lg" */}
          {/*      outline */}
          {/*      className="top-right-button top-right-button-single" */}
          {/*    > */}
          {/*      <IntlMessages id="pages.actions" /> */}
          {/*    </DropdownToggle> */}
          {/*    <DropdownMenu> */}
          {/*      <DropdownItem header> */}
          {/*        <IntlMessages id="pages.header" /> */}
          {/*      </DropdownItem> */}
          {/*      <DropdownItem disabled> */}
          {/*        <IntlMessages id="pages.delete" /> */}
          {/*      </DropdownItem> */}
          {/*      <DropdownItem> */}
          {/*        <IntlMessages id="pages.another-action" /> */}
          {/*      </DropdownItem> */}
          {/*      <DropdownItem divider /> */}
          {/*      <DropdownItem> */}
          {/*        <IntlMessages id="pages.another-action" /> */}
          {/*      </DropdownItem> */}
          {/*    </DropdownMenu> */}
          {/*  </UncontrolledDropdown> */}
          {/* </div> */}

          <Breadcrumb match={match} />
          <Separator className="mb-5" />
        </Colxx>

        {/* Extra */}
        <Colxx>
          <Card>
            <CardBody>
              <Nav tabs className="separator-tabs ml-0 mb-5">
                <NavItem>
                  <NavLink
                    location={{}}
                    to="#"
                    className={classnames({
                      active: activeTabEx === 'details',
                      'nav-link': true,
                    })}
                    onClick={() => setActiveTabEx('details')}
                  >
                    <IntlMessages id="pages.details" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    location={{}}
                    to="#"
                    className={classnames({
                      active: activeTabEx === 'orders',
                      'nav-link': true,
                    })}
                    onClick={() => setActiveTabEx('orders')}
                  >
                    <IntlMessages id="pages.orders" />
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={activeTabEx}>
                <TabPane tabId="details">
                  <Row>
                    <Colxx xxs="12" lg="4" className="mb-4">
                      <Card className="mb-4">
                        {/* <div className="position-absolute card-top-buttons"> */}
                        {/*  <Button outline color="white" className="icon-button"> */}
                        {/*    <i className="simple-icon-pencil" /> */}
                        {/*  </Button> */}
                        {/* </div> */}
                        <img
                          src={product.img}
                          alt="Detail"
                          className="card-img-top"
                        />

                        <CardBody>
                          <Row>
                            <Colxx sm="12">
                              <Colxx className="d-inline-flex justify-content-between pl-0 pr-0">
                                <p className="font-weight-bold mb-2">
                                  <IntlMessages id="pages.title" />
                                </p>
                                <Button
                                  onClick={() => {
                                    setIsEdit(true);
                                    setModalOpen(true);
                                  }}
                                >
                                  Edit
                                </Button>
                              </Colxx>
                              <p className="mb-3">{product.title}</p>
                            </Colxx>
                          </Row>
                          <p className="text-muted text-small mb-2">
                            <IntlMessages id="pages.description" />
                          </p>
                          <p className="mb-3">{product.description}</p>

                          {/* <p className="text-muted text-small mb-2"> */}
                          {/*  <IntlMessages id="pages.rating" /> */}
                          {/* </p> */}
                          {/* <div className="mb-3"> */}
                          {/*  <Rating total={5} rating={5} interactive={false} /> */}
                          {/* </div> */}

                          {/* <p className="text-muted text-small mb-2"> */}
                          {/*  <IntlMessages id="pages.price" /> */}
                          {/* </p> */}
                          {/* <p className="mb-3">$8,14</p> */}
                          <p className="text-muted text-small mb-2">
                            <IntlMessages id="pages.ingredients" />
                          </p>
                          <div className="mb-3">
                            <p className="d-sm-inline-block mb-1">
                              <Badge color="outline-secondary mb-1 mr-1" pill>
                                Flour
                              </Badge>
                              <Badge color="outline-secondary mb-1 mr-1" pill>
                                Chocolate
                              </Badge>
                              <Badge color="outline-secondary mb-1 mr-1" pill>
                                Caster Sugar
                              </Badge>
                              <Badge color="outline-secondary mb-1 mr-1" pill>
                                Baking Powder
                              </Badge>
                              <Badge color="outline-secondary mb-1 mr-1" pill>
                                Milk
                              </Badge>
                              <Badge color="outline-secondary mb-1 mr-1" pill>
                                Eggs
                              </Badge>
                              <Badge color="outline-secondary mb-1 mr-1" pill>
                                Vegetable Oil
                              </Badge>
                            </p>
                          </div>
                          <Button>Add Ingredient</Button>
                          {/* <p className="text-muted text-small mb-2"> */}
                          {/*  <IntlMessages id="pages.is-vegan" /> */}
                          {/* </p> */}
                          {/* <p>No</p> */}
                        </CardBody>
                      </Card>
                      <Row>
                        <Colxx xxs="12" className="mb-4">
                          <RadialProgressCard
                            className="mb-4"
                            title={messages['pages.order-status']}
                            percent={85}
                            isSortable={false}
                          />
                        </Colxx>
                        <Colxx xxs="12" className="mb-4">
                          <RadialProgressCard
                            className="mb-4"
                            title={messages['pages.order-status']}
                            percent={40}
                            isSortable={false}
                          />
                        </Colxx>
                      </Row>
                      <Row>
                       <Colxx xxs="12">
                         <Card >
                           <CardBody>
                             <p className="font-weight-bold">Sales</p>
                             <Table borderless>
                               <thead>
                               <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">First</th>
                                 <th scope="col">Last</th>
                                 <th scope="col">Date</th>
                               </tr>
                               </thead>
                               <tbody>
                               <tr>
                                 <th scope="row">1</th>
                                 <td>Mark</td>
                                 <td>Otto</td>
                                 <td>10/9/2020</td>
                               </tr>
                               <tr>
                                 <th scope="row">2</th>
                                 <td>Jacob</td>
                                 <td>Thornton</td>
                                 <td>10/9/2020</td>
                               </tr>
                               <tr>
                                 <th scope="row">3</th>
                                 <td>Larry the Bird</td>
                                 <td>Thornton</td>
                                 <td>10/9/2020</td>
                               </tr>
                               </tbody>
                             </Table>
                           </CardBody>
                         </Card>
                       </Colxx>
                      </Row>
                    </Colxx>

                    <Colxx xxs="12" lg="8">
                      <SmallLineCharts itemClass="dashboard-small-chart-analytics" />
                      <WebsiteVisitsChartCard
                        className="mb-4"
                        controls={false}
                      />
                      {/*<NewComments className="mb-4" displayRate />*/}
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="orders">
                  <Orders />
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <AddNewModal
        product={product}
        isEdit={isEdit}
        modalOpen={modalOpen}
        toggleModal={() => setModalOpen(!modalOpen)}
        // categories={categories}
      />
    </>
  );
};
export default injectIntl(ProductDetailPage);
