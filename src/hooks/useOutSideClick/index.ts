import {useRef, useEffect} from "react"

export const useOutSideClick = (callback: () => void) => {

    const ref:React.MutableRefObject<any> = useRef();

    useEffect(() => {
        console.log('montou');
        const handleOutClick = (event: { target: any; }) => {
            const target = event.target;
            if(!ref.current.contains(target)){
                callback();
            }
            
        }

        document.addEventListener("mousedown", handleOutClick);

        return() => { 
        document.removeEventListener("mousedown", handleOutClick);
        }
    },[callback])

    return ref

}