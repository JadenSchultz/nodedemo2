import { useState } from React

const MyCounter = (props) => {

    console.log(props)

    // initialize counters at countState = 0
    const [countState, setCountState] = useState(0)

    function increment() {
        // countState++
        setCountState(countState + props.incCount)
    }

    return (
        <div>
            <div>(countState)</div>
            <button id="incBtn" onClick={incrementNumber}>+1</button>
        </div>
    )

}

export default MyCounter;