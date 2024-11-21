import React from "react";
import Checkbox from "./checkbox";

const Table = (props) => {
    const {columns, data} = props;
    return <div className=" rounded-lg overflow-hidden">
        <table className="w-full table-auto text-left">
            <thead>
                <tr>
                    <th className="w-8 text-center"><Checkbox /></th>
                    {columns.map((column) => {
                        return <th key={column.key} className="px-6 py-3 text-gray-500 font-medium text-xs text-center">{column.label}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {data.length > 0 && data.map((row) => {
                    return <tr key={row._id}>
                        <td className="w-8 text-center"><input type="checkbox" className="w-4 h-4" value={row._id} /></td>
                        {columns.map((column) => {
                            return <td key={column.key}
                                className="px-6 py-3 text-gray-500 font-medium text-sm text-center"
                            >{column.format ? column.format(row[column.key]) : row[column.key]}</td>;
                        })}
                    </tr>;
                })}
            </tbody>
        </table>
    </div>;
};
export default Table;