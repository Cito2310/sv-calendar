import { Routes, Route } from "react-router-dom"
import { PathVillageRouter } from "./PathVillageRouter"
import { CropsPage } from "../page/CropsPage"
import { ForagingRouter } from "./ForagingRouter"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/pathVillage/*" element={ <PathVillageRouter /> } />
            <Route path="/foraging/*" element={ <ForagingRouter /> } />
            <Route path="/crops" element={ <CropsPage /> } />
            
            {/* <Route path="/*" element={ <Navigate to={"/crops"}/> } /> */}
        </Routes>
    )
}