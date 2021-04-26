// https://www.youtube.com/watch?v=ArmI_skIXpo
// React hooks-2021-04-7
// useState callback style
// useMemo - запам'ятовує значення
// memo - запам'ятовує компоненту
// useCallback
// useReducer - використовується для того ж, що і useState
// 55:50

import './App.css';
import React, {useEffect, useMemo, useState, useCallback, useReducer} from "react";

// const fn = (a, b) => {
//     console.log('called');
//     return Math.pow(a, b);
// }
//
// const Child = React.memo(() => {
//     const [counter, setCounter] = useState(0);
//     const inc = () => {
//         setCounter(prev => prev + 1);
//     }
//     console.log('child rerendered');
//     return (
//         <>
//             <h1>child comp </h1>
//             <button onClick={inc}>{counter}</button>
//         </>
//     )
// })


const initialState = {
    counter: 0,
    counter1: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INC_MY_COOL_COUNTER':
            return {...state, counter: state.counter + 1};
        case 'DEC_MY_COOL_COUNTER':
            return {...state, counter: state.counter - 1};
        default:
            // throw new Error();
            return state;
    }
}

function App() {
    // const [counter, setCounter] = useState(0);
    // const [counter1, setCounter1] = useState(2);
    //
    // // const inc = () => {
    // //     setCounter(counter + 1);
    // //     //setCounter - асинхронна функція
    // //     // console.log(1, counter);
    // // }
    // //
    // // useEffect(()=>{
    // //     // console.log(2, counter);
    // // }, [counter])
    //
    // // const inc = () => {
    // //     // useState callback style
    // //     setCounter(prev => prev + 1);
    // //     //setCounter - асинхронна функція
    // //     // console.log(1, counter);
    // // }
    // // useEffect(() => {
    // //     // console.log(2, counter);
    // // }, [counter])
    //
    // // const inc = useCallback(() => {
    // //     setCounter(prev => prev + 1);
    // // }, [])
    // const inc = useCallback(() => {
    //     console.log(counter, 'counter');
    // //     setCounter(counter + 1);
    // // }, [counter])
    //     setCounter(prev => prev + 1);
    // }, [])
    //
    // const inc1 = useCallback(() => {
    //     setCounter1(prev => prev + 1);
    // }, [])
    //
    // // const comlexLogic = fn(4, 2);
    // const comlexLogic = useMemo(() => {
    //     // return fn(4, counter1);
    //     return fn(4, 2);
    // }, [counter1]);
    //
    // console.log('rerender', comlexLogic);

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="App">
            {/*<button onClick={inc}>{counter}</button>*/}
            {/*<button onClick={inc1}>{counter1} 1</button>*/}
            <h1>{state.counter}</h1>
            <button onClick={() => dispatch({type: 'INC_MY_COOL_COUNTER'})}>inc</button>
            <button onClick={() => dispatch({type: 'DEC_MY_COOL_COUNTER'})}>dec</button>
            <button onClick={() => dispatch({type: 'ERR_MY_COOL_COUNTER'})}>err</button>

            {/*/!*<Child />*!/*/}

            {/*/!*{} === {}; false*!/*/}
            {/*/!*() === ();false*!/*/}
            {/*<Child inc={inc}/>*/}
        </div>
    );
}

export default App; 