import {ApiData, IApiData} from "../models";

async function fetchSwapiData(url: string) {
    const response = await fetch(url);
    return await response.json();
}

export async function fetchPost(page: number, rowsPerPage:number): Promise<IApiData> {
    const url='https://jsonplaceholder.typicode.com/posts'
    const urlConcatenation = url+`?_start=${page*rowsPerPage}&_limit=${rowsPerPage}`
    const data:ApiData[]=await fetchSwapiData(urlConcatenation)
    const count=await fetchSwapiData(url)
    return {data:data, count:count.length}
}

export async function fetchTodos(page: number, rowsPerPage:number): Promise<IApiData> {
    const url='https://jsonplaceholder.typicode.com/todos'
    const urlConcatenation = url+`?_start=${page*rowsPerPage}&_limit=${rowsPerPage}`
    const data:ApiData[]=await fetchSwapiData(urlConcatenation)
    const count=await fetchSwapiData(url)
    return {data:data, count:count.length}
}