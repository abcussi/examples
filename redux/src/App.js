import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import { fetchCustomers } from './asyncAction/customers';
import { addCashAction, addCustomerAction, getCashAction, removeCustomerAction } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)

  console.log('cash', cash, "customers", customers);

  const addCash = (cash) => { dispatch(addCashAction(cash)) }
  const getCash = (cash) => { dispatch(getCashAction(cash)) }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }
  return (
    <div className="App">
      <header className="App-header">

        <div style={{ fontSize: "3rem", marginBottom: 10 }}>Баланс: {cash}</div>
        <div style={{ display: "flex" }}>
          <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
          <button onClick={() => getCash(Number(prompt()))}>Снять со  счета</button>
          <button onClick={() => addCustomer(prompt())}>Add client</button>
          <button onClick={() => dispatch(fetchCustomers())}>Add client server_db</button>
        </div>
      </header>
      <main className="App-header">
        {customers.length > 0 ?
          <div>
            {customers
              .map(customer => <div key={customer.id} onClick={() => removeCustomer(customer)}
                style={{ fontSize: "2rem", border: 'solid 1px white', padding: "10px", marginTop: 5, color: "red" }} >
                {customer.name}
              </div>)}
          </div>
          :
          <div style={{ fontSize: "2rem", marginTop: 20 }}>
            no clients found!</div>
        }
      </main >
    </div >
  );
}

export default App;
// Заключение
// Есть dispatch в него передается action, то как action будет изменять состояние определено внутри reducer
// reducer это чистая ф-я, к-я принимает состояние  и всегда возвращает новый объект state
// Этот reducer передается в store и с помощью Provider передается в компонент App.js в которых это состояние мы и используем
