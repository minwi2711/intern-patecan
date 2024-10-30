'use client'
import { useEffect, useState } from "react";
import Link from 'next/link'
import axios from "axios";

interface ITodoList {
    id: string,
    title: string
}

function TodoList() {
    const [todos, setTodos] = useState<ITodoList[]>([])

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                // handle success
                const todos = response.data;
                setTodos(todos);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (
        <div

            className="mx-5">
            <h1>TodoList</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span className="mx-3">{todo.id}.</span>
                        <Link href={`/todolist/${todo.id}`}><span>{todo.title}</span></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
