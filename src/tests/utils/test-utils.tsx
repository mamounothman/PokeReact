import React from 'react'
import { render } from "@testing-library/react";
import { Provider } from 'react-redux'
import { setupStore } from '../../app/store'
import { setupListeners } from '@reduxjs/toolkit/query'

function renderWithProviders(
    ui,
    {
      preloadedState = {},
      store = setupStore(preloadedState),
      ...renderOptions
    } = {}
  ) {
  
    setupListeners(store.dispatch);
  
    function Wrapper({ children }) {
      return <Provider store={store}>{children}</Provider>
    }
  
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }  
}

export * from "@testing-library/react";
export  { default as userEvent} from "@testing-library/user-event";
export { renderWithProviders as render }