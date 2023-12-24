import React, {useMemo} from "react";
import DataDisplay from "./DataDisplay";
import TablePagination from "@mui/material/TablePagination";
import PaginationLogic from "../Logic/PaginationLogic";
import {SwapiResponse} from "../service/ServiceRequest";
interface PaginationProps<T> {
    fetchData: (page: number) => Promise<SwapiResponse<any>>;
}
function  TableComponent<T>({ fetchData }: PaginationProps<T>) {
    const { data, count, page,handleChangePage}=PaginationLogic({ fetchData })
    return (
        <>
            <DataDisplay data={data}/>
            <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={count}
                rowsPerPage={10}
                page={page}
                onPageChange={handleChangePage}
            />
        </>
    );
}
export  default  TableComponent;