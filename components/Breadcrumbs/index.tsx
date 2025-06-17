'use client'

import { useCtx } from "@/ctx";

import {useState, useEffect} from "react"
import { Breadcrumb } from 'antd';

export const linkNames = {
    "about": "О нас",
    "contacts": "Контакты",
    "projects": "Проекты",
    "faq": "FAQ",
    "reviews": "Отзывы",
    "": "Главная"
}

import projects from "@/data/projects.json";

import { usePathname } from 'next/navigation'

export default function BreadCrumbs() {
    const path = usePathname();
    const [links, setLinks]= useState([])

    // const {user} = useCtx()

    useEffect(() => {
        if (path) {
            setLinks(path.split("/").map((el) => {
                const proName = projects.filter(pr => pr.id === el)[0];
                console.log(proName?.name);
                const p = `/${el}`
                const start = path.indexOf(p), finish = p.length;
                const pth = path.slice(0, start + finish);
                const obj = {
                    title: linkNames[el] || proName?.name || el
                }
                if (pth !== path) {
                    obj.href = pth
                }
                return obj;
            }))
        }
    }, [path])
    return <>
        {/* {user} */}
        <Breadcrumb items={links}/>
    </>
}
