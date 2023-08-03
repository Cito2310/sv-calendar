import { Routes, Route, Navigate } from "react-router-dom"
import { PathVillageRouter } from "./PathVillageRouter"
import { CropsPage } from "../page/CropsPage"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/pathVillage/*" element={ <PathVillageRouter /> } />
            <Route path="/foraging" element={ <h1>foraging</h1> } />
            <Route path="/crops" element={ <CropsPage /> } />
            
            <Route path="/*" element={ <Navigate to={"/crops"}/> } />
        </Routes>
    )
}