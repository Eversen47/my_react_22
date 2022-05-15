import React, { useState } from 'react';
import Button from '../../shared/Button';
import style from './ItemsList.module.scss';

const ItemsList = () => {
  const [chartItemsAmount, setChartItemsAmout] = useState(0);

  const [name, setName] = useState('');

  console.log(chartItemsAmount);

  const handleAddItemTOChart = () => {
    if (chartItemsAmount < 5) {
      setChartItemsAmout(chartItemsAmount + 1);
    }
  };

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className={style.item_list__wrapper}>
      <div>
        <p>{chartItemsAmount ? `Колличество товаров: ${chartItemsAmount}` : 'Корзина пуста'}</p>

        {chartItemsAmount === 5 && <p>Корзина заполнина!</p>}

        <Button btnText="Добавить в корзину" handleClick={handleAddItemTOChart} />
      </div>

      <div>
        <p>{name || 'Укажите имя'}</p>
        <input type="text" onChange={handleNameInput} />
      </div>
    </div>
  );
};

export default ItemsList;
