import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '166b9e97-d8fe-44b6-af0e-8586f7357111'
    }
})


type TodolistType= {
    id: string
    addedDate: string
    order: number
    title: string
}

export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

export const todolistAPI = {
   getTodolist() {
        return instance.get<Array<TodolistType>>('todo-lists')
    },
   createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title})
    },
   deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`,)
    },
   updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType<{}>>(`todo-lists/${todolistId}`, {title})
    },
    getTasks(todolistId: string) {
        return instance.get(`todo-lists/${todolistId}/tasks`)
    },
    addTasks(todolistId: string, taskName: string) {
        return instance.post(`todo-lists/${todolistId}/tasks`, {title: taskName})
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    changeTask(todolistId: string, taskId: string, taskDataObj: any) {
        return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, taskDataObj)
    },
}