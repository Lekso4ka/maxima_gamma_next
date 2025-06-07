import Link from "next/link";
import Image from "next/image";


import st from "./Menu.module.css";

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
    return <nav className={st.menu}>
        {menuItems.map((el, i) => <Link
            className={st.menuItem}
            key={`menu-item-${i}`}
            href={el.link}
        >
            {el.name}
        </Link>)}
        <Image src={Pic} alt=""/>
    </nav>
}