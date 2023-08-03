import { Routes, Route, Navigate } from "react-router-dom"
import { ForagingPage } from "../page/ForagingPage"

export const ForagingRouter = () => {
    return (
        <>
            <Routes>
                <Route path="Beach" element={ <ForagingPage type="Beach" /> } />
                <Route path="BusStop" element={ <ForagingPage type="BusStop" /> } />
                <Route path="Forest" element={ <ForagingPage type="Forest" /> } />
                <Route path="Mountain" element={ <ForagingPage type="Mountain" /> } />
                <Route path="Backwoods" element={ <ForagingPage type="Backwoods" /> } />
                <Route path="Railroad" element={ <ForagingPage type="Railroad" /> } />
                <Route path="Town" element={ <ForagingPage type="Town" /> } />

                <Route path="/" element={ <Navigate to={ "Forest" } /> } />
                <Route path="/*" element={ <Navigate to={ "Forest" } /> } />
            </Routes>
        </>
    )
}