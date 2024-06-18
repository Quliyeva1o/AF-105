import { useEffect } from "react"

const useUpdateLogger = function(value){
    useEffect(()=>{
        console.log(value)
    },[value]);
}

export default useUpdateLogger