"use client"
import {createContext} from "react"


interface  SearchType{
    [x:string] : any
}

export const searchContext = createContext({}  as SearchType);
