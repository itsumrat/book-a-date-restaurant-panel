import starter1 from '../assets/img/Starter1.jpg';
import starter2 from '../assets/img/Starter2.jpg';
import starter3 from '../assets/img/Starter3.jpg';

const starters = [
  {
    id: 1,
    title: 'Signature Rib Steak',
    productLine: 1,
    img: starter1,
    category: 'Cakes',
    createDate: '02.04.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Potato Kofters',
    sales: 1647,
    price: 3,
    stock: 62,
  },
  {
    id: 2,
    title: 'Signature tacos',
    productLine: 2,
    category: 'Cupcakes',
    img: starter2,
    createDate: '01.04.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Camembert Cheese',
    sales: 1240,
    price: 3,
    stock: 48,
  },
  {
    id: 3,
    title: 'Cheese Cake',
    productLine: 3,
    img: starter3,
    category: 'Cakes',
    createDate: '25.03.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Vegetarian Tart',
    sales: 1080,
    price: 3,
    stock: 57,
  },
]

export default starters;