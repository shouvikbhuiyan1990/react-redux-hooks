import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../actions/count";

const Home = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <main>
            <div>Count: {count}</div>
            <button onClick={() => dispatch(increment())}>Add to count</button>
        </main>
    );
};

export default Home;