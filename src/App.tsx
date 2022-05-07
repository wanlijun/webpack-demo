// TODO如何配置才能消除这句
import React from 'react';
import { message } from './common';
import styles from './index.module.less';


const App = () => {
  console.log(styles, '-')
  message('cai')
  return <div className={styles.hello}>Apph1111111111111</div>
}
export default App
