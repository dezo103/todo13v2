import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";

export default {
    title: "API"
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolist()
            .then((res) => {
            setState(res.data)
        })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'API'
        todolistAPI.createTodolist(title)
            .then((res) => {
            setState(res.data)
        })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'fe14e646-70f3-4a4e-272-93c8a78ba90f';
       todolistAPI.deleteTodolist(todolistId)
           .then((res) => {
           setState(res.data)
        })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'API'
        const todolistId = '501439e9-a7f8-46af-636-aba28c46df44';
        todolistAPI.updateTodolist(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '7f425dcc-3f43-4fa7-05d-9d9b9aebafad'
        todolistAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const AddTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const taskName = 'Task9'
        const todolistId = '0cab2f64-1c3c-41e9-81e2-f653b44601e'
        todolistAPI.addTasks(todolistId, taskName)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '7f425dcc-3f43-4fa7-a05d9d9b9aebafad';
        const taskId = '69604f29-9265-4451-a792-90326a0a053'
        todolistAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const ChangeTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const taskDataObj = {
            title: 'Changed Task Thirdly',
            description: 'Task5',
            completed: true,
            status: 1,
            priority: 1,
            startDate: new Date(),
            deadline: new Date()
        }
        const todolistId = '7f425dcc-3f43-fa7-a05d-9d9b9aebafad';
        const taskId = 'c62bf18c-d938-42b98e12-fad2ced33c16'
        todolistAPI.changeTask(todolistId, taskId, taskDataObj)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}






