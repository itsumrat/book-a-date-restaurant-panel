import bottle_of_red_wine from '../assets/img/product1.jpg';
import bottle_of_white_wine from '../assets/img/product2.jpg';
import drinks3 from '../assets/img/drink3.jpeg';

const drinks = [
  {
    id: 1,
    title: 'Bottle of Red Wine',
    productLine: 5,
    category: 'Cupcakes',
    img: bottle_of_red_wine,
    createDate: '02.06.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'French Bordeaux Cabernet Sauvignon 2005',
    sales: 985,
    price: 12,
    stock: 23,
  },
  {
    id: 1,
    title: 'Bottle of White Wine',
    productLine: 5,
    category: 'Cupcakes',
    img: bottle_of_white_wine,
    createDate: '02.06.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Bottle of White Wine',
    sales: 985,
    price: 12,
    stock: 23,
  },
  {
    id: 1,
    title: 'Glass of Prosecco ',
    productLine: 5,
    category: 'Cupcakes',
    img: drinks3,
    createDate: '02.06.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Glass of Prosecco',
    sales: 985,
    price: 12,
    stock: 23,
  },

];
export default drinks;