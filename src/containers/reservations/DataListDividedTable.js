/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
import React from 'react';
import { CardTitle, Badge } from 'reactstrap';
import { useTable, usePagination, useSortBy } from 'react-table';
import classnames from 'classnames';

import IntlMessages from '../../helpers/IntlMessages';
import DatatablePagination from '../../components/DatatablePagination';

const produtcs = [
  {
    id: 1,
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
                  {...column.getHeaderProps(column.getSortByToggleProps())}
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
  const cols = React.useMemo(
    () => [
      {
        Header: 'Product details',
        accessor: 'productDetails',
        cellClass: 'list-item-heading w-40',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Customer name',
        accessor: 'customerName',
        cellClass: 'list-item-heading w-40',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Customer email',
        accessor: 'customerEmail',
        cellClass: 'list-item-heading w-40',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Product line',
        accessor: 'productLine',
        cellClass: 'list-item-heading w-40',
        Cell: (props) => <>{props.value}</>,
      },
      {
        accessor: 'createDate',
        cellClass: 'text-muted  w-40',
        Cell: (props) => <>{props.value}</>,
      },
      {
        accessor: 'status',
        cellClass: 'text-muted  w-40',
        Cell: (props) => <Badge color={'secondary'} pill>{props.value}</Badge>,
      },
    ],
    []
  );
  return (
    <div className="mb-4">
      <CardTitle>
        <IntlMessages id="table.divided" />
      </CardTitle>
      <Table columns={cols} data={produtcs} divided />
    </div>
  );
};
export default DataListDividedTable;
