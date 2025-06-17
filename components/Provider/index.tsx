// https://ant.design/theme-editor

"use client"

import {useState, useEffect} from "react"
import type { ReactNode } from "react";
import ContextProvider, {useCtx} from "@/ctx";
import {ConfigProvider} from "antd";

import type {ThemeConfig} from "antd"


const themeColors: {"dark": ThemeConfig, "light": ThemeConfig} = {
    "dark": {
        token: {
            colorTextBase: "#dedede",
            colorBgBase: "#373b63"
        },
        components: {
            Button: {
                defaultBg: "#222",
                defaultColor: "#dedede"
            }
        }
    },
    "light": {
        token: {
            colorTextBase: "#222",
            colorBgBase: "#aaaadf"
        },
        components: {
            Button: {
                defaultBg: "#dedede",
                defaultColor: "#222"
            }
        }
    }
}


function ThemeProvider({children}: {children: ReactNode}) {
    const {theme} = useCtx()

    const [config, setConfig] = useState(themeColors.dark)

    useEffect(() => {
        setConfig(theme === "dark" ? themeColors.dark : themeColors.light)
        console.log(theme)
    }, [theme])

    return <ConfigProvider
        theme={theme === "dark" ? themeColors.dark : themeColors.light}
    >
        {children}
    </ConfigProvider>
}



export default function Provider({children}: {children: ReactNode}) {
    return <>
        <ContextProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </ContextProvider>
    </>
}
