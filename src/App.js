import './App.css';
import MyComponent from './MyComponent';
import React, {useState} from 'react';

export default function MyFunction() {
  const [count, setCount] = useState(0);

  return (
      <div>
        <MyComponent title="My title" description="My Description" count={count}
                     onClick={() => setCount(count + 1)}/>
      </div>
  )
};