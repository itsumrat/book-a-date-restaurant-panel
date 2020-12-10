import React from 'react';
import { Card, CardBody } from 'reactstrap';
import moment from 'moment';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx } from '../../../components/common/CustomBootstrap';

const InvoiceStatement = ({ data }) => {
  return (
    <>
      {/* Larger screen layout */}
      <Colxx xxs="12" className=" d-md-block">
        <Card className="mb-3 table-heading">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex  flex-md-row justify-content-between min-width-zero align-items-md-center">
              <p className="list-item-heading mb-0 truncate w-40 w-xs-100" />
              <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                <IntlMessages id="pages.invoice.paid" />
              </p>
              <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                <IntlMessages id="pages.invoice.team" />
              </p>
              <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                <IntlMessages id="pages.invoice.enterprise" />
              </p>
            </CardBody>
          </div>
        </Card>

        {data.map((inv) => (
          <Card key={inv.id} className="flex flex-row mb-3">
            <div className="d-flex flex-grow-1 min-width-zero">
              <CardBody className="align-self-center d-flex  flex-md-row justify-content-between min-width-zero align-items-md-center">
                <p className="list-item-heading mb-0 truncate w-40 w-xs-100 text-center">
                  <span className="d-block">
                    {moment(inv.start_date).format('MMMM')}
                  </span>
                  <span className="d-block">{`${moment(inv.start_date).format(
                    'L'
                  )} to ${moment(inv.end_date).format('L')}`}</span>
                </p>
                <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                  {inv.paid && <i className="simple-icon-check" />}
                </p>
                <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                  <p>{inv.team}</p>
                </p>
                <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                  {inv.enterprise && <i className="simple-icon-check" />}
                </p>
              </CardBody>
            </div>
          </Card>
        ))}
      </Colxx>

      {/* /!* Smaller screen layout *!/ */}
      {/* <Colxx xxs="12" className="d-block d-md-none"> */}
      {/*  <Card className="d-flex flex-row mb-3 table-heading"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="pl-0 pb-0"> */}
      {/*        <p className="list-item-heading mb-0 text-primary"> */}
      {/*          <IntlMessages id="pages.price.twofactorauthentication" /> */}
      {/*        </p> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}
      {/*  <Card className="d-flex flex-row mb-3"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="align-self-center d-flex flex-row"> */}
      {/*        <p className="list-item-heading mb-0 truncate w-70"> */}
      {/*          <IntlMessages id="pages.price.developer" /> */}
      {/*        </p> */}
      {/*        <p className="text-primary text-right mb-0 w-30 text-one"> */}
      {/*          <i className="simple-icon-check" /> */}
      {/*        </p> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}
      {/*  <Card className="d-flex flex-row mb-3"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="align-self-center d-flex flex-row"> */}
      {/*        <p className="list-item-heading mb-0 truncate w-70"> */}
      {/*          <IntlMessages id="pages.price.team" /> */}
      {/*        </p> */}
      {/*        <p className="text-primary text-right mb-0 w-30 text-one"> */}
      {/*          <i className="simple-icon-check" /> */}
      {/*        </p> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}
      {/*  <Card className="d-flex flex-row mb-3"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="align-self-center d-flex flex-row"> */}
      {/*        <p className="list-item-heading mb-0 truncate w-70"> */}
      {/*          <IntlMessages id="pages.price.enterprise" /> */}
      {/*        </p> */}
      {/*        <p className="text-primary text-right mb-0 w-30 text-one"> */}
      {/*          <i className="simple-icon-check" /> */}
      {/*        </p> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}

      {/*  <Card className="d-flex flex-row mb-3 table-heading"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="pl-0 pb-0"> */}
      {/*        <p className="list-item-heading mb-0 text-primary"> */}
      {/*          <IntlMessages id="pages.price.teampermissions" /> */}
      {/*        </p> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}
      {/*  <Card className="d-flex flex-row mb-3"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="align-self-center d-flex flex-row"> */}
      {/*        <p className="list-item-heading mb-0 truncate w-70"> */}
      {/*          <IntlMessages id="pages.price.developer" /> */}
      {/*        </p> */}
      {/*        <p className="text-primary text-right mb-0 w-30 text-one" /> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}

      {/*  <Card className="d-flex flex-row mb-3"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="align-self-center d-flex flex-row"> */}
      {/*        <p className="list-item-heading mb-0 truncate w-70"> */}
      {/*          <IntlMessages id="pages.price.team" /> */}
      {/*        </p> */}
      {/*        <p className="text-primary text-right mb-0 w-30 text-one"> */}
      {/*          <i className="simple-icon-check" /> */}
      {/*        </p> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}

      {/*  <Card className="d-flex flex-row mb-3"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="align-self-center d-flex flex-row"> */}
      {/*        <p className="list-item-heading mb-0 truncate w-70"> */}
      {/*          <IntlMessages id="pages.price.enterprise" /> */}
      {/*        </p> */}
      {/*        <p className="text-primary text-right mb-0 w-30 text-one"> */}
      {/*          <i className="simple-icon-check" /> */}
      {/*        </p> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}

      {/*  <Card className="d-flex flex-row mb-3 table-heading"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="pl-0 pb-0"> */}
      {/*        <p className="list-item-heading mb-0 text-primary"> */}
      {/*          <IntlMessages id="pages.price.245Support" /> */}
      {/*        </p> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}
      {/*  <Card className="d-flex flex-row mb-3"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="align-self-center d-flex flex-row"> */}
      {/*        <p className="list-item-heading mb-0 truncate w-70"> */}
      {/*          <IntlMessages id="pages.price.developer" /> */}
      {/*        </p> */}
      {/*        <p className="text-primary text-right mb-0 w-30 text-one" /> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}
      {/*  <Card className="d-flex flex-row mb-3"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="align-self-center d-flex flex-row"> */}
      {/*        <p className="list-item-heading mb-0 truncate w-70"> */}
      {/*          <IntlMessages id="pages.price.team" /> */}
      {/*        </p> */}
      {/*        <p className="text-primary text-right mb-0 w-30 text-one"> */}
      {/*          <i className="simple-icon-check" /> */}
      {/*        </p> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}
      {/*  <Card className="d-flex flex-row mb-3"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="align-self-center d-flex flex-row"> */}
      {/*        <p className="list-item-heading mb-0 truncate w-70"> */}
      {/*          <IntlMessages id="pages.price.enterprise" /> */}
      {/*        </p> */}
      {/*        <p className="text-primary text-right mb-0 w-30 text-one" /> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}

      {/*  <Card className="d-flex flex-row mb-3 table-heading"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="pl-0 pb-0"> */}
      {/*        <p className="list-item-heading mb-0 text-primary"> */}
      {/*          <IntlMessages id="pages.price.247Support" /> */}
      {/*        </p> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}
      {/*  <Card className="d-flex flex-row mb-3"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="align-self-center d-flex flex-row"> */}
      {/*        <p className="list-item-heading mb-0 truncate w-70"> */}
      {/*          <IntlMessages id="pages.price.developer" /> */}
      {/*        </p> */}
      {/*        <p className="text-primary text-right mb-0 w-30 text-one" /> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}
      {/*  <Card className="d-flex flex-row mb-3"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="align-self-center d-flex flex-row"> */}
      {/*        <p className="list-item-heading mb-0 truncate w-70"> */}
      {/*          <IntlMessages id="pages.price.team" /> */}
      {/*        </p> */}
      {/*        <p className="text-primary text-right mb-0 w-30 text-one" /> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}
      {/*  <Card className="d-flex flex-row mb-3"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="align-self-center d-flex flex-row"> */}
      {/*        <p className="list-item-heading mb-0 truncate w-70"> */}
      {/*          <IntlMessages id="pages.price.enterprise" /> */}
      {/*        </p> */}
      {/*        <p className="text-primary text-right mb-0 w-30 text-one"> */}
      {/*          <i className="simple-icon-check" /> */}
      {/*        </p> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}

      {/*  <Card className="d-flex flex-row mb-3 table-heading"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="pl-0 pb-0"> */}
      {/*        <p className="list-item-heading mb-0 text-primary"> */}
      {/*          <IntlMessages id="pages.price.useractionsauditlog" /> */}
      {/*        </p> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}
      {/*  <Card className="d-flex flex-row mb-3"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="align-self-center d-flex flex-row"> */}
      {/*        <p className="list-item-heading mb-0 truncate w-70"> */}
      {/*          <IntlMessages id="pages.price.developer" /> */}
      {/*        </p> */}
      {/*        <p className="text-primary text-right mb-0 w-30 text-one" /> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}
      {/*  <Card className="d-flex flex-row mb-3"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="align-self-center d-flex flex-row"> */}
      {/*        <p className="list-item-heading mb-0 truncate w-70"> */}
      {/*          <IntlMessages id="pages.price.team" /> */}
      {/*        </p> */}
      {/*        <p className="text-primary text-right mb-0 w-30 text-one" /> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}
      {/*  <Card className="d-flex flex-row mb-3"> */}
      {/*    <div className="d-flex flex-grow-1 min-width-zero"> */}
      {/*      <CardBody className="align-self-center d-flex flex-row"> */}
      {/*        <p className="list-item-heading mb-0 truncate w-70"> */}
      {/*          <IntlMessages id="pages.price.enterprise" /> */}
      {/*        </p> */}
      {/*        <p className="text-primary text-right mb-0 w-30 text-one"> */}
      {/*          <i className="simple-icon-check" /> */}
      {/*        </p> */}
      {/*      </CardBody> */}
      {/*    </div> */}
      {/*  </Card> */}
      {/* </Colxx> */}
    </>
  );
};

export default InvoiceStatement;
