import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '166b9e97-d8fe-44b6-af0e-8586f7357111'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

// export const CreateTodolist = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'dezo103todolist'}, settings)
//             .then( (res) => {
//             setState(res.data);
//         } )
//
//     }, [])
//
//     return <div> {JSON.stringify(state)}</div>
// }
//
// export const DeleteTodolist = () => {
//     const todolistId = 'febbffc8-0546-4dc8-99bb-b0dbb90c630f';
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings).then( (res) => {
//         setState(res.data);
//     })
//
//     }, [])
//
//     return <div> {JSON.stringify(state)}</div>
// }
//
// export const UpdateTodolistTitle = () => {
//     const todolistId = '501439e9-a7f8-46af-9636-aba28c46df44';
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: 'REACT>>>>>>>>>'}, settings)
//             .then((res) => {
//                 setState(res.data)
//             })
//
//     }, [])
//
//     return <div> {JSON.stringify(state)}</div>
// }
