import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import theme from './configs/theme'

import './index.css'
import App from './App'
import rootReducer from './redux/reducers/index'
import rootSaga from './redux/sagas/index'
import * as serviceWorker from './serviceWorker'
import { SnackbarProvider } from 'notistack'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const devtoolReducer = process.env.NODE_ENV === 'production' ? applyMiddleware(sagaMiddleware) : composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(
  rootReducer,
  devtoolReducer
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={5} autoHideDuration={2000}>
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
