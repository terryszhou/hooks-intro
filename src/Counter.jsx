import { 
    useState,
    useEffect 
} from 'react'

const log = console.log

const Counter = () => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState({ 
        name: "Terry",
        favFood: "🍖"
    })

    useEffect(() => {
        log(user)
    }, [user])

    useEffect(() => {
        log("First render")
        //useful for API calls
    }, [])

    const handleIncreaseCount = () => {
        setCount(count + 1)
    }
    const handleDecreaseCount = () => {
        setCount(count - 1)
    }
    
    return (
        <div>
            <h1>User: {user.name}</h1>
            <h4>Favorite food: {user.favFood}</h4>
            <form>
                <label for="name">User Name:</label>
                <input
                    id="name"
                    type="text"
                    placeholder="name..."
                    onChange={e => setUser({ ...user, name: e.target.value })}
                />
            </form>
            <h3>The current count is {count}</h3>
            <button onClick={handleIncreaseCount}>+</button>
            <button onClick={handleDecreaseCount}>-</button>
        </div>
    )
}
export default Counter