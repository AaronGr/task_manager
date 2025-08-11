import type { Task } from "../../../shared/types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { tasks } from "../utils/dummy_data";
import { useState } from "react";
import styles from "../styles/TaskTable.module.css";

export default function TaskTable() {
    const columnHelper = createColumnHelper<Task>();

    const columns = [
        columnHelper.accessor('title', {
            header: () => 'Title',
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('status', {
            header: () => 'Status',
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('description', {
            header: () => 'Description',
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('due_date', {
            header: () => 'Due Date',
        }),
        columnHelper.accessor('created_at', {
            header: 'Subscription',
        }),
    ];

    const [data, _setData] = useState([...tasks]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div  className={styles["tasks-table"]}>
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                        <th key={header.id}>
                            {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                                )}
                        </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}