import React from 'react'
import ReactDom from 'react-dom/client';
import App from './App'
import printMe from './print';
const root = ReactDom.createRoot(
  document.getElementById('root')
);
root.render(<App />);
// I think this is a HRM handle which describes what should happen when the module is updated.
if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('获取更新!!')
    printMe();
  })
}