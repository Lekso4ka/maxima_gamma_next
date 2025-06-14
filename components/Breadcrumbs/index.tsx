'use client'

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


import { usePathname } from 'next/navigation'

export default function BreadCrumbs() {
    const path = usePathname();
    const [links, setLinks]= useState([])

    useEffect(() => {
        if (path) {
            setLinks(path.split("/").map((el) => {
                const p = `/${el}`
                const start = path.indexOf(p), finish = p.length;
                const pth = path.slice(0, start + finish);
                const obj = {
                    title: linkNames[el]
                }
                if (pth !== path) {
                    obj.href = pth
                }
                return obj;
            }))
        }
    }, [path])
    return <Breadcrumb items={links}/>
}
