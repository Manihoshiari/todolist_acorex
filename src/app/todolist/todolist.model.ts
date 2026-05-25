export interface newTask{
    id:string
    taskstats:string
    taskname?:string
    describion?:string
    assignees?:string
    date?:string
    pririty:string
    flag:boolean
    
}
export interface assignees{
    id?:string
    value?:string
    img?:string
}