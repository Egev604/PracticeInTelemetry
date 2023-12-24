import React, {useEffect, useState} from "react";
import {SwapiResponse} from "../service/ServiceRequest";
interface PaginationProps<T> {
    fetchData: (page: number) => Promise<SwapiResponse<any>>;
}
function PaginationLogic<T>({fetchData}:PaginationProps<T>) {
    const [page, setPage]=useState(0)
    const [data, setData]=useState<T[]>([])
    const [count, setCount]=useState(0)
    useEffect(() => {
        fetch()
    }, [page]);
    async function fetch() {
        const response = await fetchData(page);
        setData(response.results);
        setCount(response.count)
        console.log(data)
    }
    async function handleChangePage(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) {
        setPage(newPage)
    }
    return {page, data, count, handleChangePage};
}
export default PaginationLogic;