"use client"
import {JSX} from "react";
import styles from "./Page.module.css"
import Counter from "@/components/Counter";
import {Typography} from "antd";

const {Title} = Typography;

export default function Page ({children}: {children: JSX.Element}) {
    return <div className={styles.page}>
        <Title type="success">Это компонент макета страницы</Title>
        <nav>
            <ul>
                <li>Lorem ipsum.</li>
                <li>Accusamus, architecto.</li>
                <li>Nulla, odio!</li>
                <li>Debitis, officia.</li>
                <li>Aperiam, nobis.</li>
            </ul>
        </nav>
        <div>
            <Counter/>
            {children}
        </div>
    </div>;
}