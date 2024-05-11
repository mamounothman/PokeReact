import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { server } from "./src/tests/mocks/server";
import { setupStore } from './src/app/store'
import { apiSlice } from './src/app/features/api/apiSlice';

const store = setupStore({});

beforeAll(() => {
    server.listen({onUnhandledRequest: 'error'});
});

afterAll(() => {
    server.close();
})


afterEach(() => {
  server.resetHandlers();
  store.dispatch(apiSlice.util.resetApiState());
  cleanup();
})