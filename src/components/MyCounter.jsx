import { useState} from React

const MyCounter = (props) => {

    console.log(props)

    // initialize counters at countState = 0
    const [countState, setCountState] = useState(0)

    function incCount() {
        // countState++
        setCountState(countState + props.incBy)
    }

    return (
        <div>
            <div>(countState)</div>
            <button onClick={incCount}>(props.incBy)</button>
        </div>
    )

}

export default MyCounter;