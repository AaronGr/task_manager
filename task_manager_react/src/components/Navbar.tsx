import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Modal from "./Modal";
import AddTaskForm from "./AddTaskForm";

export default function Navbar() {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className={styles.navbar}>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Add New Task">
                <AddTaskForm />
            </Modal>
            <div className={styles.title}>
                <h1>Task Manager</h1>
            </div>
            <div className={styles["nav-items"]}>
                <div className={styles["nav-item"]}>
                    <a>Login</a>
                </div>
                <div className={styles["nav-item"]} onClick={() => setModalOpen(true)} >
                    <a>Add Task</a>
                </div>
            </div>
        </div>
    )
}