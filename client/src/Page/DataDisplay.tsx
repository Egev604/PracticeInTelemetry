import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
interface DataDisplayProps{
    data:any[]
}
export default function DataDisplay({data}:DataDisplayProps) {
    console.log(data)
    const urlRegExp: RegExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

    const isUrl: boolean = urlRegExp.test("ваша строка для проверки");
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableBody>
                    {data.map((dataItem, index)=>
                        <TableRow key={index}>
                            {Object.keys(dataItem).map(value=> !urlRegExp.test(dataItem[value]) ? (<TableCell component="th" scope="row">
                                {dataItem[value]}
                            </TableCell>): null)}
                        </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}