import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage"
import { ReactElement } from "react"

export const QueueRoute = ({ Component }: { Component: ReactElement }) => {
    return (
        <Routes>
            <Route
                path="/Queue"
                element={<MainPage Component={Component} />}
            />
        </Routes>
    )
}
