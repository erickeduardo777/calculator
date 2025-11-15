import useStore from "./componenteStore"

const Com1 = () => {
    const cont = useStore(state => state.count)
    const increment = useStore(state => state.incrementarFunc)
    const decrement = useStore(state => state.decrement)
    const reset = useStore(state => state.reset)

    return (
        <>
            <h1>{cont}</h1><br />
            <button onClick={increment}>incrementar</button><br />
            <button onClick={decrement}>decrementar</button><br />
            <button onClick={reset}>resetar</button><br />
        </>
    )
}

export default Com1