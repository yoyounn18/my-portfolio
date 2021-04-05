import React, { useState, useEffect, useRef } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const letter = "안녕하세요 Front-End 개발자 지망생 김영조입니다.";
    useInterval(() => {
        // Your custom logic here
        setCount(count + 1);
        if (count > letter.length) {
            // setCount(0);
            clearInterval();
        }
    }, 100);

    return <h1>{letter.slice(0, count)}</h1>;
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default Counter;