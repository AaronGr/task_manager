import type { Task } from "../../../shared/types";

export const tasks: Task[] = [
        {
            "id": "1b2e3d4f-1111-2222-3333-444455556666",
            "user_id": "a1b2c3d4-aaaa-bbbb-cccc-ddddeeeeffff",
            "title": "Finish project proposal",
            "description": "Prepare the final slides and document for the project proposal meeting.",
            "status": "in-progress",
            "due_date": "2025-08-15",
            "created_at": "2025-08-01T10:15:00Z"
        },
        {
            "id": "7f8e9d0a-aaaa-bbbb-cccc-ddddeeeeffff",
            "user_id": "a1b2c3d4-aaaa-bbbb-cccc-ddddeeeeffff",
            "title": "Grocery shopping",
            "description": "Buy milk, eggs, and vegetables.",
            "status": "todo",
            "due_date": "2025-08-12",
            "created_at": "2025-08-05T14:30:00Z"
        },
        {
            "id": "22334455-6666-7777-8888-9999aaaabbbb",
            "user_id": "a1b2c3d4-aaaa-bbbb-cccc-ddddeeeeffff",
            "title": "Update portfolio website",
            "description": "Add the latest projects and update the contact form.",
            "status": "done",
            "due_date": "2025-08-03",
            "created_at": "2025-07-30T08:45:00Z"
        },
        {
            "id": "abcde123-4567-890a-bcde-f1234567890a",
            "user_id": "a1b2c3d4-aaaa-bbbb-cccc-ddddeeeeffff",
            "title": "Call the electrician",
            "description": "Schedule an appointment to fix the kitchen lights.",
            "status": "todo",
            "due_date": "2025-08-13",
            "created_at": "2025-08-06T09:00:00Z"
        },
        {
            "id": "deadbeef-0000-1111-2222-333344445555",
            "user_id": "a1b2c3d4-aaaa-bbbb-cccc-ddddeeeeffff",
            "title": "Write blog post on React hooks",
            "description": "Draft a technical blog post explaining useEffect and useCallback with examples.",
            "status": "in-progress",
            "due_date": "2025-08-20",
            "created_at": "2025-08-04T16:00:00Z"
        }
    ]