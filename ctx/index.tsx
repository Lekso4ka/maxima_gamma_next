"use client"
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

const Ctx = createContext({})

export function useCtx() {
    return useContext(Ctx)
}

export default function ContextProvider({children}: {children: ReactNode}) {
    const [theme, setTheme] = useState("dark");
    return <Ctx.Provider value={{
        user: "Leksa",
        theme, setTheme
    }}>{children}</Ctx.Provider>
}