"use client"
import { createContext, useContext } from "react";
import type { ReactNode } from "react";

const Ctx = createContext({})

export function useCtx() {
    return useContext(Ctx)
}

export default function ContextProvider({children}: {children: ReactNode}) {
    return <Ctx.Provider value={{
        user: "Leksa"
    }}>{children}</Ctx.Provider>
}