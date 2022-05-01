// TODO如何配置了消除这句
import React from 'react';
import _ from './common';
const App =  () => {
  import('./common')
  .then((obj) => {
    console.log(obj)
  });
  console.log(obj)
  return <div>Apph1111111111111</div>
}
export default App