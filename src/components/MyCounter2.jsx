import { useState} from React

const MyCounter = (props) => {

    console.log(props)

    // initialize counters at countState = 0
    const [countState, setCountState] = useState(0)

    function decCount() {
        // countState - 1
        setCountState(countState - props.decBy)
    }

    return (
        <div>
            <div>(countState)</div>
            <button onClick={decCount}>(props.decBy)</button>
        </div>
    )

}

export default MyCounter;