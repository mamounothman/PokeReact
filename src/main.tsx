import React from 'react'
import ReactDOM from 'react-dom/client'

import { setupStore } from './app/store'
import { Provider } from 'react-redux';

import App from './app/App.tsx'

const store = setupStore({});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
