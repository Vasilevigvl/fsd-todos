import { MainPage } from "@/pages/main";
import { createBrowserRouter } from "react-router-dom"
import { baseLayout } from "./layouts/baseLayout";
import { TodosPage } from "@/pages/todos";

export const appRouter = () => (
    createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
            errorElement: <div>Error while routing...</div>,
        },
        {
            element: baseLayout(),
            errorElement: <div>Error while routing...</div>,
            children:[
                {
                    path: "/todos",
                    element: <TodosPage/>, //есть возможность добавить guard на проверку авторизацию
                }
            ]
        }
    ])    
);