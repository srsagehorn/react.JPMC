import * as React from 'react';

const {useState} = React;

export default function Counter () {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick = {() => {setCounter(counter + 1)}}>add</button>
            <button onClick = {() => {setCounter(counter - 1)}}>subtract</button>
        </div>
    )
}