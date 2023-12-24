import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CellValue from "./CellValue";
import {ApiData} from "../models";
interface DataDisplayProps {
    data:ApiData[]
}
export default function DataDisplay ({data}:DataDisplayProps) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableBody>
                    {data.map((dataItem, index)=>
                        <TableRow key={index}>
                            <CellValue item={dataItem} index={index}/>
                        </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}