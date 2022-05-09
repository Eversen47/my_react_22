import React, { FC } from 'react';
import style from './Item.module.scss';

interface IItem {
  name: string;
  description: string;
}

const Item: FC<IItem> = (props: any) => {
  const { name, description } = props;

  return (
    <div className={style.item_container}>
      <p>{name}</p>
      <div>Описание</div>
      <p>{description}</p>
    </div>
  );
};
export default Item;
