import React, {useEffect, useState} from "react";
import {ApiData, IApiData} from "../models";
interface PaginationProps {
    fetchData: (page: number,rowsPerPage:number) => Promise<IApiData>;
}
function usePagination({fetchData}:PaginationProps) {
    const [rowsPerPage, setRowsPerPage]=useState(10)
    const [page, setPage]=useState(0)
    const [data, setData]=useState<ApiData[]>([])
    const [count, setCount]=useState(0)
    const [isLoading, setIsLoading]=useState(false)
    useEffect(() => {
        fetch()
    }, [page, rowsPerPage]);
    async function fetch() {
        setIsLoading(true)
        const {data, count}=(await fetchData(page, rowsPerPage))
        setData(data)
        setCount(count)
        setIsLoading(false)
    }
    async function handleChangePage(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) {
        setPage(newPage)
    }
    async function handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const rowsPerPageB = parseInt(event.target.value, 10)
        setRowsPerPage(rowsPerPageB)
        setPage(0)
    }
    return {page, data, count, handleChangePage, isLoading, handleChangeRowsPerPage, rowsPerPage};
}
export default usePagination;