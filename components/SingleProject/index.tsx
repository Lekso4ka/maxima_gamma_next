"use client"

import {useState} from "react";
import {Typography} from "antd";

import projects from "@/data/projects.json";
import BreadCrumbs from "@/components/Breadcrumbs";

export default function SingleProject ({id}) {
    const {Title} = Typography;
    const [data, setData] = useState(projects.filter(el => el.id === id)[0])
    return <>
        <Title>{data.name}</Title>
        <BreadCrumbs/>
    </>
}