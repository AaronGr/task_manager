import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                <h1>Task Manager</h1>
            </div>
            <div className={styles["nav-items"]}>
                <div className={styles["nav-item"]}>
                    <a>Login</a>
                </div>
            </div>
        </div>
    )
}