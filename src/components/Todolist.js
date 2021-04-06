import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Todolist() {
    const [todoData, setTodo] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "todo"]{
                title,
                author,
                date,
                content,
                techstack,
            }`
            )
            .then((data) => setTodo(data))
            .catch(console.error);
    }, []);

    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <section className="container mx-auto">
                {/* <h1 className="text-5xl flex justify-center cursive">
                    Blog todos
        </h1> */}
                {/* <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    Welcome to my page of blog todos
        </h2> */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {todoData &&
                        todoData.map((todo, index) => (
                            <article>
                                <span
                                    className="block h-64 relative rounded shadow leading-snug bg-white shadow-2xl"
                                    key={index}
                                >
                                    <span className="cursive pl-4 mt-5 pt-2 text-2xl">
                                        {new Date(todo.date).toLocaleDateString()}
                                    </span>
                                    <div className="grid grid-flow-col grid-rows-5 gap-3 ml-2 mt-3 text-xl maple-font">
                                        <span className="ml-4 maple-font">
                                            {todo.content[0]}
                                        </span>
                                        <span className="ml-4">
                                            {todo.content[1]}
                                        </span>
                                        <span className="ml-4">
                                            {todo.content[2]}
                                        </span>
                                        <span className="ml-4">
                                            {todo.content[3]}
                                        </span>
                                        <div className="gird gird-flow-col grid-col-5 text-xl ">
                                            <span className=" text-gray-200 bg-green-900 rounded m-1 p-1">
                                                {todo.techstack[0]}
                                            </span>
                                            <span className=" text-gray-200 bg-green-900 rounded m-1 p-1">
                                                {todo.techstack[1]}
                                            </span>
                                            <span className=" text-gray-200 bg-green-900 rounded m-1 p-1">
                                                {todo.techstack[2]}
                                            </span>
                                        </div>
                                    </div>
                                </span>
                            </article>
                        ))}
                </div>
            </section>
        </main>
    );
}