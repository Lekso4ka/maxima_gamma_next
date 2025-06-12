"use client"
import {useState} from "react";
import { Button } from "antd"
import {
    MinusOutlined,
    PlusOutlined
} from "@ant-design/icons"


export default function Counter() {
    const [n, setN] = useState(5);

    const inc = () => {
        setN(n + 1);
    }
    const dec = () => {
        setN(n - 1)
    }
    return <div>
        <Button
            disabled={n === 0}
            onClick={dec}
            shape="circle"
            icon={<MinusOutlined />}
        />
        <Button
            color="cyan"
            variant="text"
        >{n}</Button>
        <Button
            disabled={n === 10}
            onClick={inc}
            shape="circle"
        >
            <PlusOutlined />
        </Button>
    </div>
}