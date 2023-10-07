import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import {Provider as ReduxProvider} from "react-redux"
import {appRouter} from './appRouter'

import './index.scss'
import { setupStore } from './appStore'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={setupStore()} >
      <RouterProvider router={appRouter()} />
    </ReduxProvider>
  </React.StrictMode>,
)