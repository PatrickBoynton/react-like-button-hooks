import { useState, useEffect } from 'react';

const useCount = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const onClickButton = () => {
    setCount(count + 1);
  };

  const checkCount = (count) => {
    count === 1 ? setText('like') : setText('likes');
  };

  useEffect(() => {
    checkCount(count);
  }, [checkCount, count]);

  return [count, text, onClickButton];
};

export default useCount;
