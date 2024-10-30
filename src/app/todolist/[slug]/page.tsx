'use client'
import { useState, useEffect } from "react";
import axios from "axios";

interface ITodoList {
    id: string,
    title: string,
    userId: string,
    completed: boolean
}
function TodoById({
    params,
}: {
    params: { slug: string }
}) {

    const [todo, setTodo] = useState<ITodoList | null>(null)


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${params.slug}`)
            .then(function (res) {
                setTodo(res.data) //success
            })
            .catch(function (error) {
                console.log(error); //err
            })
    }, [params.slug]
    )

    if (!todo) return <p>Loading...</p>;

    return (

        <div className="mx-5" >
            <h1>id: {todo.id}</h1>
            <h1>title: {todo.title}</h1>
            <h1>user id: {todo.userId}</h1>
            <h1>completed: {todo.completed ? 'true' : 'false'}</h1>
        </div >
    )
}

export default TodoById;
