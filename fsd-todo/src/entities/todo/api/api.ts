import { baseApi } from "@/shared/api/baseApi";
import {Todo} from "./types"

export const todoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], void>({
            query: () => ({
                url: "/todos",
                method: "GET",
            })
        })
    })
})

export const { useGetTodosQuery } = todoApi