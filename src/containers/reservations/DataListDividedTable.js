/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
import React, { useState } from 'react';
import { CardTitle, Badge } from 'reactstrap';
import TimePicker from 'rc-time-picker';
import { useTable, usePagination, useSortBy } from 'react-table';
import classnames from 'classnames';
import DatePicker from 'react-datepicker';
import Button from 'reactstrap/es/Button';
import Modal from 'reactstrap/es/Modal';
import ModalBody from 'reactstrap/es/ModalBody';
import Row from 'reactstrap/es/Row';
import ModalHeader from 'reactstrap/es/ModalHeader';
import IntlMessages from '../../helpers/IntlMessages';
import DatatablePagination from '../../components/DatatablePagination';
import products from '../../data/products';
import { Colxx } from '../../components/common/CustomBootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';

const produtcs = [
  {
    id: 1,
    time: '12:02',
    telephone: '024322448',
    productDetails: 'Signature Rib Steak',
    img: '/assets/img/marble-cake-thumb.jpg',
    productLine: 'Cakes',
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    createDate: '02.04.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Signature Rib Steak',
    sales: 1647,
    stock: 62,
  },
  {
    id: 2,
    time: '12:04',
    telephone: '02482441',
    productDetails: 'Signature tacos',
    productLine: 'Cupcakes',
    img: '/assets/img/fat-rascal-thumb.jpg',
    customerName: 'Anna Sthesia',
    customerEmail: 'dummyemail@email.com',
    createDate: '01.04.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Signature Tacos with Beef Steak',
    sales: 1240,
    stock: 48,
  },
  {
    id: 3,
    time: '12:06',
    telephone: '024824409',
    productDetails: 'Cheese Cake',
    img: '/assets/img/chocolate-cake-thumb.jpg',
    productLine: 'Cakes',
    customerName: 'Petey Cruiser.',
    customerEmail: 'dummyemail@email.com',
    createDate: '25.03.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Homemade cheesecake with fresh berries and mint',
    sales: 1080,
    stock: 57,
  },
  {
    id: 4,
    time: '12:07',
    telephone: '02482467',
    productDetails: 'Goose Breast',
    img: '/assets/img/goose-breast-thumb.jpg',
    productLine: 'Cakes',
    customerName: 'Mario Speedwagon.',
    customerEmail: 'dummyemail@email.com',
    createDate: '21.03.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Chocolate cake with berries',
    sales: 1014,
    stock: 41,
  },
  {
    id: 5,
    time: '12:09',
    telephone: '024824409',
    productDetails: 'Bottle of Red wine',
    productLine: 'Cupcakes',
    img: '/assets/img/petit-gateau-thumb.jpg',
    customerName: 'Paul Molive.',
    customerEmail: 'dummyemail@email.com',
    createDate: '02.06.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'French Bordeaux Cabernet Sauvignon 2005',
    sales: 985,
    stock: 23,
  },
  {
    id: 6,
    time: '12:12',
    telephone: '02482454',
    productDetails: 'Bottle of White Wine',
    img: '/assets/img/salzburger-nockerl-thumb.jpg',
    productLine: 'Desserts',
    customerName: 'Anna Mull.',
    customerEmail: 'dummyemail@email.com',
    createDate: '14.07.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'New Zealand Sauvignon Blanc 2014',
    sales: 962,
    stock: 34,
  },
  {
    id: 7,
    time: '12:23',
    telephone: '02482456',
    productDetails: 'Napoleonshat',
    img: '/assets/img/napoleonshat-thumb.jpg',
    productLine: 'Desserts',
    customerName: 'Gail Forcewind.',
    customerEmail: 'dummyemail@email.com',
    createDate: '05.02.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Cheesecake with fresh berries and mint for dessert',
    sales: 921,
    stock: 31,
  },
  {
    id: 8,
    time: '12:34',
    telephone: '024824456',
    productDetails: 'Cheesecake',
    img: '/assets/img/cheesecake-thumb.jpg',
    productLine: 'Cakes',
    customerName: 'Paige Turner',
    customerEmail: 'dummyemail@email.com',
    createDate: '18.08.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Delicious vegan chocolate cake',
    sales: 887,
    stock: 21,
  },
  {
    id: 9,
    time: '12:12',
    telephone: '024824454',
    productDetails: 'Financier',
    img: '/assets/img/financier-thumb.jpg',
    productLine: 'Cakes',
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    createDate: '15.03.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description:
      'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
    sales: 865,
    stock: 53,
  },
  {
    id: 10,
    time: '12:02',
    telephone: '02482328',
    productDetails: 'Genoise',
    img: '/assets/img/genoise-thumb.jpg',
    productLine: 'Cupcakes',
    customerName: 'Paige Turner',
    customerEmail: 'dummyemail@email.com',
    createDate: '11.06.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Christmas fruit cake, pudding on top',
    sales: 824,
    stock: 55,
  },
  {
    id: 11,
    time: '12:02',
    telephone: '024821248',
    productDetails: 'Gingerbread',
    img: '/assets/img/gingerbread-thumb.jpg',
    productLine: 'Cakes',
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    createDate: '10.04.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Wedding cake decorated with donuts and wild berries',
    sales: 714,
    stock: 12,
  },
  {
    id: 12,
    time: '12:02',
    telephone: '0248244435',
    productDetails: 'Magdalena',
    img: '/assets/img/magdalena-thumb.jpg',
    productLine: 'Cakes',
    customerName: 'Paige Turner',
    customerEmail: 'dummyemail@email.com',
    createDate: '22.07.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Christmas fruit cake, pudding on top',
    sales: 702,
    stock: 14,
  },
  {
    id: 13,
    time: '12:02',
    telephone: '02482445',
    productDetails: 'Parkin',
    img: '/assets/img/parkin-thumb.jpg',
    productLine: 'Cakes',
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    createDate: '22.08.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description:
      'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
    sales: 689,
    stock: 78,
  },
  {
    id: 14,
    time: '12:02',
    telephone: '022342448',
    productDetails: 'Streuselkuchen',
    img: '/assets/img/streuselkuchen-thumb.jpg',
    productLine: 'Cakes',
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    createDate: '22.07.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Delicious vegan chocolate cake',
    sales: 645,
    stock: 55,
  },
  {
    id: 15,
    time: '12:02',
    telephone: '02483248',
    productDetails: 'Tea loaf',
    img: '/assets/img/tea-loaf-thumb.jpg',
    productLine: 'Cakes',
    customerName: 'Paige Turner',
    customerEmail: 'dummyemail@email.com',
    createDate: '10.09.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Cheesecake with fresh berries and mint for dessert',
    sales: 632,
    stock: 20,
  },
  {
    id: 16,
    time: '12:02',
    telephone: '02486448',
    productDetails: 'Merveilleux',
    img: '/assets/img/merveilleux-thumb.jpg',
    productLine: 'Cakes',
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    createDate: '18.02.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Chocolate cake with mascarpone',
    sales: 621,
    stock: 6,
  },
  {
    id: 17,
    time: '12:02',
    telephone: '02452448',
    productDetails: 'Fruitcake',
    img: '/assets/img/fruitcake-thumb.jpg',
    productLine: 'Cakes',
    customerName: 'Paige Turner',
    customerEmail: 'dummyemail@email.com',
    createDate: '12.01.2019',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Chocolate cake with berries',
    sales: 595,
    stock: 17,
  },
  {
    id: 18,
    time: '12:02',
    telephone: '02482448',
    productDetails: 'Bebinca',
    img: '/assets/img/bebinca-thumb.jpg',
    productLine: 'Cakes',
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    createDate: '04.02.2019',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Homemade cheesecake with fresh berries and mint',
    sales: 574,
    stock: 16,
  },
  {
    id: 19,
    time: '12:02',
    telephone: '024823448',
    productDetails: 'Cremeschnitte',
    img: '/assets/img/cremeschnitte-thumb.jpg',
    productLine: 'Desserts',
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    createDate: '04.03.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Cheesecake with chocolate cookies and Cream biscuits',
    sales: 562,
    stock: 9,
  },
  {
    id: 20,
    time: '12:02',
    telephone: '02482448',
    productDetails: 'Soufflé',
    img: '/assets/img/souffle-thumb.jpg',
    productLine: 'Cupcakes',
    customerName: 'Paige Turner',
    customerEmail: 'dummyemail@email.com',
    createDate: '16.01.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Wedding cake with flowers Macarons and blueberries',
    sales: 524,
    stock: 14,
  },
];

function Table({ columns, data, divided = false, defaultPageSize = 6 }) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: defaultPageSize },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <table
        {...getTableProps()}
        className={`r-table table ${classnames({ 'table-divided': divided })}`}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  key={`th_${columnIndex}`}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sorted-desc'
                        : 'sorted-asc'
                      : ''
                  }
                >
                  {column.render('Header')}
                  <span />
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={`td_${cellIndex}`}
                    {...cell.getCellProps({
                      className: cell.column.cellClass,
                    })}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <DatatablePagination
        page={pageIndex}
        pages={pageCount}
        canPrevious={canPreviousPage}
        canNext={canNextPage}
        pageSizeOptions={[4, 10, 20, 30, 40, 50]}
        showPageSizeOptions={false}
        showPageJump={false}
        defaultPageSize={pageSize}
        onPageChange={(p) => gotoPage(p)}
        onPageSizeChange={(s) => setPageSize(s)}
        paginationMaxSize={pageCount}
      />
    </>
  );
}

const DataListDividedTable = () => {
  const [oldDate, setOldDate] = useState(new Date());
  const [newDate, setNewDate] = useState(new Date());
  const [oldTime, setOldTime] = useState(new Date());
  const [newTime, setNewTime] = useState(new Date());
  const [reScVisible, setReScVisible] = useState(false);
  const [confVisible, setConfVisible] = useState(false);

  const cols = React.useMemo(
    () => [
      {
        Header: 'Date Reservation',
        accessor: 'createDate',
        cellClass: 'list-item-heading font-weight-bold ',
        isSorted: false,
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Time',
        accessor: 'time',
        cellClass: 'list-item-heading',
        Cell: (props) => <>{moment(props.value).format('hh:mm a')}</>,
      },
      {
        Header: 'Customer name',
        accessor: 'customerName',
        cellClass: 'list-item-heading',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Telephone',
        accessor: 'telephone',
        cellClass: 'list-item-heading',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Customer email',
        accessor: 'customerEmail',
        cellClass: 'list-item-heading',
        Cell: (props) => <>{props.value}</>,
      },
      // {
      //   Header: 'Product line',
      //   accessor: 'category',
      //   cellClass: 'list-item-heading',
      //   Cell: (props) => (
      //     <>{props.value.charAt(0).toUpperCase() + props.value.slice(1)}</>
      //   ),
      // },
      {
        Header: 'Product details',
        accessor: 'productDetails',
        cellClass: 'list-item-heading w-40',
        Cell: (props) => <>{props.value}</>,
      },
      // {
      //   Header: 'Status',
      //   accessor: 'status',
      //   cellClass: 'text-muted ',
      //   Cell: (props) => (
      //     <Badge color="secondary" pill>
      //       {props.value}
      //     </Badge>
      //   ),
      // },
      {
        Header: 'Actions',
        accessor: '',
        cellClass: 'text-muted w-30',
        Cell: (props) => (
          <div className="d-inline-flex">
            <Button onClick={() => setConfVisible(true)} color="primary">
              Confirm
            </Button>
            <Button
              onClick={() => {
                setReScVisible(true);
                setOldDate(new Date(props.row.values.createDate));
                setOldTime(new Date(props.row.values.time));
              }}
              className="ml-3"
              color="secondary"
            >
              Re-schedule
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div className="mb-4">
      {/* <CardTitle> */}
      {/*  <IntlMessages id="table.divided" /> */}
      {/* </CardTitle> */}
      <Table columns={cols} data={products} divided />
      <Modal unmountOnClose isOpen={reScVisible}>
        <div className="d-flex justify-content-between p-3">
          <h5>Re-Schedule</h5>
          <span
            onClick={() => setReScVisible(false)}
            style={{ cursor: 'pointer' }}
          >
            <i className="simple-icon-close" />
          </span>
        </div>
        <ModalBody>
          <Row>
            <Colxx className="d-inline-flex justify-content-around" xxs={12}>
              <div>
                <h3>Date</h3>
                <div>
                  <div>
                    <h3>Old Date</h3>
                    <DatePicker
                      selected={oldDate}
                      onChange={(date) => setOldDate(date)}
                    />
                  </div>
                  <div>
                    <h3>New Date</h3>
                    <DatePicker
                      selected={newDate}
                      onChange={(date) => setNewDate(date)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3>Time</h3>
                <div>
                  <div style={{ marginBottom: 15 }}>
                    <h3>Old Time</h3>
                    <TimePicker defaultValue={moment(new Date(oldTime))} />
                  </div>
                  <div>
                    <h3>New Time</h3>
                    <TimePicker
                      onChange={(time) => setNewTime(time)}
                      defaultValue={moment()}
                    />
                  </div>
                </div>
              </div>
            </Colxx>
            <Colxx className="d-inline-flex mt-5 justify-content-between">
              <Button onClick={() => setReScVisible(false)} color="primary">
                Confirmed
              </Button>
              <Button onClick={() => setReScVisible(false)} color="danger">
                Cancel
              </Button>
            </Colxx>
          </Row>
        </ModalBody>
      </Modal>
      <Modal isOpen={confVisible}>
        <div className="d-flex justify-content-between p-3">
          <h5>Confirm or Reject</h5>
          <span
            onClick={() => setConfVisible(false)}
            style={{ cursor: 'pointer' }}
          >
            <i className="simple-icon-close" />
          </span>
        </div>
        <ModalBody className="d-inline-flex justify-content-around">
          <Button color="primary" onClick={() => setConfVisible(false)}>
            Confirm
          </Button>
          <Button color="secondary" onClick={() => setConfVisible(false)}>
            Reject
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default DataListDividedTable;
