import React from "react";
import DataDisplay from "./DataDisplay";
import TablePagination from "@mui/material/TablePagination";
import usePagination from "../Hooks/usePagination";
import {IApiData} from "../models";
interface TableComponenetProps {
    fetchData: (page: number, rowsPerPage:number) => Promise<IApiData>;
}
function  TableComponent({ fetchData }: TableComponenetProps) {
    const { data, count, page,handleChangePage, isLoading, handleChangeRowsPerPage, rowsPerPage}=usePagination({ fetchData })
    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <DataDisplay data={data}/>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                onRowsPerPageChange={handleChangeRowsPerPage}
                onPageChange={handleChangePage}

            />
        </>
    );
}
export  default  TableComponent;