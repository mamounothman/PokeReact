import React from 'react'
import ReactDOM from 'react-dom/client'

import { apiSlice } from './app/features/api/apiSlice.tsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

import App from './app/App.tsx'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefualtMiddleware => getDefualtMiddleware().concat(apiSlice.middleware)
});



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
