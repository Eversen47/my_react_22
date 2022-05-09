import React from 'react';
import Item from '../Item';
import style from './ItemsList.module.scss';

const ItemsMock = [
  {
    id: 1,
    itemName: 'Ботинки',
    itemDescription: 'Сотрите какие потрясающие ботинки',
    price: 10000,
  },
  { id: 2, itemName: 'Шапка', itemDescription: 'Очень красивая  шапка', price: 5000 },
  { id: 3, itemName: 'Пиджак', itemDescription: 'Очень красивая пиджак', price: 20000 },
  { id: 4, itemName: 'Платье', itemDescription: 'Очень красивая  платье', price: 50000 },
];

const ItemsList = () => {
  return (
    <div className={style.items_list_wrapper}>
      <p>Список товров:</p>
      <div className={style.item_list}>
        {ItemsMock.map((item) => {
          const { id, itemName, itemDescription } = item;
          return <Item key={`ID: ${id} ${item}`} name={itemName} description={itemDescription} />;
        })}
        {/* <Item name={ItemsMock.itemName} description={ItemsMock.itemDescription} />
        <Item name="ШАПКА" description="Очень красивая шапка" />
        <Item name={ItemsMock.itemName} description={ItemsMock.itemDescription} />
        <Item name={ItemsMock.itemName} description={ItemsMock.itemDescription} /> */}
      </div>
    </div>
  );
};

export default ItemsList;
