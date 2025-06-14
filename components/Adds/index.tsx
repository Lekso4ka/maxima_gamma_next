"use client"
import { Carousel } from "antd";

import data from "@/data/adds.json"

import {
    DivWrapper, Wrapper
} from "./Adds.styled"


export default function Adds () {
    const st = {
        height: "200px",
        background: "#222"
    }
    return <Wrapper>
        <Carousel autoplay>
            {data.map((el, index) => <DivWrapper
                key={index}
                pic={el.pic}
            >
                <h3>{el.title}</h3>
                <p>{el.text}</p>
            </DivWrapper>)}
        </Carousel>
    </Wrapper>
}