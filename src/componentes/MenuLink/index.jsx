import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to }) {
    // const localizacao = useLocation();
    // console.log(localizacao);
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isPending
                    ? `${styles.link}`
                    : isActive
                    ? `${styles.link} ${styles.linkDestacado}}`
                    : ""
            }
        >
            {children}
        </NavLink>

        // <Link
        //     className={`${styles.link} ${
        //         localizacao.pathname === to ? styles.linkDestacado : ""
        //     }`}
        //     to={to}
        // >
        //     {children}
        // </Link>
    );
}
