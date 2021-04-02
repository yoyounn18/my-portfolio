import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import kakaoTalk from './kakaotalk.jpg';
import blex from './logo32.png';
import mainlogo from './mianLogo.png'

export default function Navbar() {
    return (
        <header className="bg-white">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-white"
                        className="inflex-flex items-center py-4 px-3 mr-4 mt-2 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest">
                        <img src={mainlogo} style={{ height: 70, width: 150 }} />
                    </NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex cursive text-bold items-center py-3 px-3 my-6 mx-1 rounded text-black-200 hover:bg-black hover:opacity-50 hover:text-white"
                        activeClassName="text-red-100 bg-black"
                    >
                        Blog post
                    </NavLink>
                    <NavLink to="/project"
                        className="inline-flex cursive items-center py-3 px-3 my-6 mx-1 rounded text-black-200 hover:bg-black hover:opacity-50 hover:text-white"
                        activeClassName="text-red-100 bg-black"
                    >
                        Project
                    </NavLink>
                    <NavLink to="about" className="inline-flex cursive items-center py-3 px-3 my-6 mx-1 rounded text-black-200 hover:bg-black hover:opacity-50 hover:text-white"
                        activeClassName="text-red-100 bg-black"
                    >
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/yoyounn18" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <a href="https://blex.me/@yoyounn18" target="_blank">
                        <img src={blex} className="mr-4 rounded" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    </a>
                    <a href="https://open.kakao.com/o/sSusFS5c" target="_blank">
                        <img src={kakaoTalk} className="mr-4 rounded" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    </a>
                </div>
            </div>
        </header>
    )
}