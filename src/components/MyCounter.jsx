import { useState } from React

const MyCounter = (props) => {

    console.log(props)

    // initialize counters at countState = 0
    const [countState, setCountState] = useState(0)

    function incrementByOne() {
        // countState++
        setCountState(countState + 1)
    }

    function incrementByTwo() {
        setCountState(countState + 2)
    }

    return (
        <div>
            <div>(countState)</div>
            <button id="oneBtn" onClick={incrementByOne}>+1</button>

            <div>(countState)</div>
            <button id="twoBtn" onClick={incrementByTwo}>+2</button>
        </div>
    )

}

export default MyCounter;