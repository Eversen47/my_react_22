import React, { useState } from 'react';
import TestPageComponent from './components/TestPageComponent';

const TestPage = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setIsShow((prev) => !prev)}>
        Показать/скрыть компонент
      </button>
      {isShow && <TestPageComponent />}
    </>
  );
};

export default TestPage;
