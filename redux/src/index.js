import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux'
import { Provider } from 'react-redux';

// 1. Инсталируем два пакета redux and react - redux
// 2. Create Object store, он содержит методы:
// 2.1 получить состояние getStore;
// 2.2 изменить состояние с помощью dispath;
// 2.3 подписаться на изменения;
// 3. 1 - м параметром createStore() яв.reducer - function (arr- func)
// 4.  Редюсер принимает 2 - а параметра:
// 4.1 Состояние - state;
// 4.2 action, это объект  с полями 
// тип, по которому изменяется состочние
// и payload, через к - е передают любое количество данных
// action = { type: "", payload: "?" }
// reducer это ф - я с логикой по варианту на  action.type изменения state или неизмененный по  default




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

