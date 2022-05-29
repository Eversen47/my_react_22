import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

const TestPageComponent = () => {
  const [counter, setCounter] = useState(0);
  const [someArray, setSomeArray] = useState([1, 2, 3]);

  const updatedArray = useMemo(() => {
    return someArray.map((num) => {
      console.log('hello');

      return num + 10;
    });
  }, [someArray]);

  // componentDidMount
  //   useEffect(() => {
  //     console.log('Компонент был отображен');
  // componentWillUnmount
  //     return () => {
  //       console.log('Компонент был удален');
  //     };
  //   }, []);

  // componentDidUpdate

  //   useEffect(() => {
  //     console.log('COUNTER был обновлен');
  //   }, [counter]);
  //   useEffect(() => {
  //     console.log('COUNTER ИЛИ SOMEARRAY был обновлен');
  //   }, [counter, someArray]);
  //   useEffect(() => {
  //     console.log('КОМПОНЕНТ был обновлен');
  //   });

  return (
    <div>
      <p>Компонент страницы</p>
      <hr />
      <div>{counter}</div>
      <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        Увеличить счетчик
      </button>
      <hr />
      <button type="button" onClick={() => setSomeArray((prev) => [...prev, prev.length + 1])}>
        Добавить число в массив
      </button>
      <div>
        {updatedArray.map((num, index) => (
          <div key={`${num + index}`}>{num}</div>
        ))}
      </div>
    </div>
  );
};
export default TestPageComponent;
