import { FC } from 'react';
import { useSelector } from "../../services/hooks";
import { Link, useLocation } from 'react-router-dom';
import styles from './order-list.module.css';
import OrderItem from '../order-item/order-item';
import { TOrder } from '../../services/types/data';

interface IOrderListProps {
  orderList: TOrder[];
  showStatus: boolean;
}

const OrderList: FC<IOrderListProps> = ({orderList, showStatus}) => {
  const ingredients = useSelector((store) => store.burger.ingredients);
  const location = useLocation();

  return (
    <>
      {
        ingredients.length ? (
            <ul className={styles.list}>
              {orderList &&
                orderList.map(item => (
                  <li key={item._id}>
                    <Link to={{
                      pathname: `${location.pathname}/${item._id}`,
                      state: {background: location}
                    }}>
                      <OrderItem order={item} key={item._id} showStatus={showStatus}/>
                    </Link>
                  </li>
                ))
              }
            </ul>
          )
          : (
            <p className={'text text_type_main-large'}>Requesting data...</p>
          )
      }
    </>
  )
}

export default OrderList;