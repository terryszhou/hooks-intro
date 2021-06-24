import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState({ name: "Terry" })
    const handleIncreaseCount = () => {
        setCount(count + 1)
    }
    const handleDecreaseCount = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>User: {user.name} </h1>
            <h3>The current count is {count}</h3>
            <button onClick={handleIncreaseCount}>+</button>
            <button onClick={handleDecreaseCount}>-</button>
        </div>
    )
}
export default Counter