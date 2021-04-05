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
                content
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
                                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-900"
                                    key={index}
                                >
                                    <span className="cursive pl-4 mt-5 text-2xl">
                                        {new Date(todo.date).toLocaleDateString()}
                                    </span>
                                    <div>
                                        <span>

                                        </span>
                                        {/* <p
                                            onClick={crossLine}
                                        >
                                            {todo.content[0]}
                                        </p> */}
                                    </div>
                                    <div>
                                        {todo.content[1]}
                                    </div>
                                    <div>
                                        {todo.content[2]}
                                    </div>
                                    <div>
                                        {todo.content[3]}
                                    </div>
                                    <div>
                                        {todo.content[4]}
                                    </div>
                                </span>
                            </article>
                        ))}
                </div>
            </section>
        </main>
    );
}