import {fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { config } from "../lib/config"

console.log("api env", config.API_ENDPOINT)

export const baseQuery = fetchBaseQuery({
    baseUrl: config.API_ENDPOINT,
    prepareHeaders: (headers) => {
        headers.set('Accept', 'application/json')
        headers.set('Content-Type', 'application/json')

        return headers
    },
})
