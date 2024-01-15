import { useState, useCallback } from "react";

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Correct implementation using useCallback
    const handleIncrement = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const handleDecrement = useCallback(() => {
        setCount((prevCount) => prevCount - 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
}

const CounterButtons = ({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button><br></br>
        <button onClick={onDecrement}>Decrement</button>
    </div>
);


// import { useState } from "react";

// // Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

// export function Assignment1() {
//     const [count, setCount] = useState(0);

//     // Your code starts here

//     function handleIncrement() {
//         //normal way
//         setCount(count+1);
//     }

//     function handleDecrement() {
//         //normal way
//         setCount(count-1); 
//     }


//     // Your code ends here
//     return (
//         <div>
//             <p>Count: {count}</p>
//             <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
//         </div>
//     );
// };

// const CounterButtons = ({ onIncrement, onDecrement }) => (
//     <div>
//         <button onClick={onIncrement}>Increment</button><br></br>
//         <button onClick={onDecrement}>Decrement</button>
//     </div>
// );
