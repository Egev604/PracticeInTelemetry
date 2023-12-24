export interface IPlanet {
    id:string
}
export interface ITodo {
    id:number
    title:string
    completed:boolean
}
export interface IPost {
    id: number
    title: string
    body: string
}
export type ApiData = IPlanet | ITodo | IPost;
export interface IApiData {
    data:ApiData[]
    count: number
}