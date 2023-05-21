import {useEffect, useState} from "react";

export const useCounter = (isForward = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + (isForward ? 1 : -1));
        }, 1000);

        return () => clearInterval(interval);
    }, [isForward]);

    return counter;
}