import { Outlet } from "react-router-dom"
import Mainnavigation from "../components/Mainnavigation";

const Root = () => {
    return (
        <>
            <Mainnavigation />
            <Outlet />
        </>
    )
}

export default Root;