import { Routes, Route, Navigate } from "react-router-dom"
import { PathVillagePage } from "../page/PathVillagePage"

export const PathVillageRouter = () => {
    return (
        <>
            <Routes>
                <Route path="Beach" element={ <PathVillagePage type="Beach" /> } />
                <Route path="BusStop" element={ <PathVillagePage type="BusStop" /> } />
                <Route path="Forest" element={ <PathVillagePage type="Forest" /> } />
                <Route path="Mountain" element={ <PathVillagePage type="Mountain" /> } />
                <Route path="Railroad" element={ <PathVillagePage type="Railroad" /> } />
                <Route path="Town" element={ <PathVillagePage type="Town" /> } />

                <Route path="/" element={ <Navigate to={ "Forest" } /> } />
                <Route path="/*" element={ <Navigate to={ "Forest" } /> } />
            </Routes>
        </>
    )
}