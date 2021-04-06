import React, { useState, useEffect, useRef } from 'react';
import image from './bg-image.jpg';
import Counter from './Counter';

export default function Home() {
    const introLetter = "Welcome to my webpage";

    return (
        <main className="bg-black height-screen min-h-screen">
            {/* <img src={image} alt="bg-img" className="absolute object-cover w-full h-full" /> */}
            <section className="relative flex justify-center min-h-screen pt-15 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold maple-font leading-none lg:leading-snug hone-name">
                    <Counter />
                </h1>
            </section>
        </main >
    )
}