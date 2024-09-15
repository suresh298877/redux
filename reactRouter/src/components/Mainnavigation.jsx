import { Link, NavLink } from "react-router-dom";
import styles from "./Mainnavigation.module.css";
const Mainnavigation = () => {
    return (
        <>
            <header>
                <NavLink style={{ marginRight: "20px" }} className={({ isActive }) => (isActive ? styles.active : undefined)} to="/" end>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? styles.active : undefined)} to="/products">Products</NavLink>
            </header>
        </>
    )
}

export default Mainnavigation;