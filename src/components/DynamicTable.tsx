import React from 'react';
import '../styles/DynamicTable.css';

interface DynamicTableProps {
    columns: string[];
    data: Array<Record<string, any>>;
    actions: (row: Record<string, any>) => JSX.Element;
}

export const DynamicTable: React.FC<DynamicTableProps> = ({ columns, data, actions }) => {
    return (
        <div className='dynamic-table-container'>
            <div className="dynamic-table">
                <table>
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th key={column}>{column}</th>
                            ))}
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column) => (
                                    <td key={column}>{row[column] || '-'}</td>
                                ))}
                                <td>{actions(row)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

