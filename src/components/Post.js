import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
            )
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);

    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <section className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {postData &&
                        postData.map((post, index) => (
                            <article>
                                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                    <span
                                        className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-900"
                                        key={index}
                                    >
                                        <img
                                            src={post.mainImage.asset.url}
                                            alt={post.mainImage.alt}
                                            className="w-full h-full rounded-r object-cover absolute"
                                        />
                                        <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                            <h3 className="text-white text-lg maple-font ml-3 px-3 py-4 bg-green-900 text-black bg-opacity-90 rounded">
                                                {post.title}
                                            </h3>
                                        </span>
                                    </span>
                                </Link>
                            </article>
                        ))}
                </div>
            </section>
        </main>
    );
}