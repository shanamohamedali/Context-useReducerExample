import { createContext, useState } from "react";

export const CounterContext=createContext();

export const CounterProvider=({children})=>{
    const[counter,setCounter]=useState(0)
    const[error,setError]=useState("")

    const onIncrement=(e)=>{
        if(counter<10){
            setCounter(prev=>prev+1);
            setError("");
        }
        else{
            setError("*Increment limit reached")
        }

       
    }
    const onDecrement=(e)=>{
        if(counter>0){
            setCounter(prev=>prev-1);
            setError("");
        }
        else{
            setError("*Decrement limit reached")
        }

       
    }

    return<CounterContext.Provider value={{counter,onIncrement,onDecrement,error}}>{children}</CounterContext.Provider>;
    
}