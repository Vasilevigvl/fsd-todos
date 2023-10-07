import {configureStore} from "@reduxjs/toolkit"
import { rootReducer } from "./rootReducer"
import { baseApi } from "@/shared/api/baseApi"

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
    })
}

const makeStore = () => setupStore();

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']