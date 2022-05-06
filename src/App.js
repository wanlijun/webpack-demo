// TODO如何配置才能消除这句
import React from 'react';
import { hello } from './common';
import './index.less';
const name = 'common'
const { message } = require('./' + name + '.js');

const App = () => {
  message()
  return <div className="hello">Apph1111111111111</div>
}
export default App
