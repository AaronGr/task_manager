import { formOptions, useForm } from '@tanstack/react-form'
import styles from '../styles/AddTaskForm.module.css'

interface TaskInput {
    title: string,
    description: string,
    status: string,
    dueDate: string,
    completed: boolean
}

export default function AddTaskForm() {
    const defaultTaskInput: TaskInput = {title: '', description: '', dueDate: '', status: '', completed: false}

    const formOpts = formOptions({
    defaultValues: defaultTaskInput,
    })

    const form = useForm({
    ...formOpts,
    onSubmit: async ({ value }) => {
        const newTask = {
            title: value.title,
            description: value.description,
            status: value.status,
            dueDate: value.dueDate,
            completed: value.completed
        };

        try {
            const response = await fetch("http://localhost:3000/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTask),
            });

            if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            console.log("Task created:", data);
        } catch (err) {
            console.error("Failed to add task", err);
        }
    }
    })

    return (
        <>
            <form
                 onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    form.handleSubmit()
            }}
            >
                <form.Field
                    name="title"
                    children={(field) => (
                        <>
                            <label htmlFor={field.name}>Title</label>
                            <input
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                        </>
                    )}
                />
                <form.Field
                    name="description"
                    children={(field) => (
                        <>
                            <label htmlFor={field.name}>Description</label>
                            <input
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                        </>
                    )}
                />
                <form.Field
                    name="dueDate"
                    children={(field) => (
                        <>
                            <label htmlFor={field.name}>Due Date</label>
                            <input
                                id={field.name}
                                type='date'
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                        </>
                    )}
                />
                <form.Field
                    name="completed"
                    children={(field) => (
                        <>
                            <label htmlFor={field.name}>Completed</label>
                            <input
                                id={field.name}
                                type='checkbox'
                                name={field.name}
                                checked={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.checked)}
                            />
                        </>
                    )}
                />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
