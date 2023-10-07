import {createApi, retry} from "@reduxjs/toolkit/query/react"
import { baseQuery } from "./baseQuery"

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: retry(baseQuery, {maxRetries: 3}),
    endpoints: () => ({}),
})