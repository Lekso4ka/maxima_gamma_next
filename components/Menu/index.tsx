"use client"
import Link from "next/link";
import Image from "next/image";


import { useCtx } from "@/ctx";


import st from "./Menu.module.css";

import {SunOutlined, MoonOutlined, MoonFilled, SunFilled } from "@ant-design/icons"

import Pic from "../../public/window.svg"

type MenuProps = {
    name: string,
    link: string
}

const menuItems: MenuProps[] = [
    {
        name: "Главная",
        link: "/"
    },
    {
        name: "Наши проекты",
        link: "/projects"
    },
    {
        name: "О нас",
        link: "/about"
    },
    {
        name: "FAQ",
        link: "/about/faq"
    },
    {
        name: "Отзывы",
        link: "/about/reviews"
    },
    {
        name: "Контакты",
        link: "/contacts"
    }
]

export default function Menu() {

    const {theme, setTheme} = useCtx()

    function themeHandler() {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return <nav className={st.menu}>
        {menuItems.map((el, i) => <Link
            className={st.menuItem}
            key={`menu-item-${i}`}
            href={el.link}
        >
            {el.name}
        </Link>)}
        <Image src={Pic} alt=""/>
        {theme === "dark" ? <>
            <SunOutlined style={{cursor: "pointer", color: "#fff"}} onClick={themeHandler}/>
            <MoonFilled style={{color: "#fff"}}/>
        </> : <>
            <SunFilled style={{color: "#fff"}}/>
            <MoonOutlined style={{color: "#fff", cursor: "pointer"}} onClick={themeHandler}/>
        </>}
    </nav>
}