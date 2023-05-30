import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// Теперь займемся объединением редюсеров, чтобы передать оба редюсера в стор.
// импортируем ф-ю комбайнРедюсерs, создаем объект комбайнРедюсер, и его полям передаем ссылки на комбинированные редюсеры,
// имена редюсоров будут соответствавать полям объекта комбайнРедюсер.
// для того чтобы отслеживать состояние store instal to yarn add redux react-devtools-extension
// передаем этот devTools 2-м параметром в store
    // 4.1 install redux - thunk,
    // 4.2 подключаем Middleware - composeWithDevTools(applyMiddleware(thunk))
    // 4.3 Для асинхронности используем server jsonplaceholder.typicode.com/users