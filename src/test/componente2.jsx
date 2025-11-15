import useStore from "./componenteStore"

const Com2 = () => {
   const count = useStore(state => state.Component2)
   const increment2 = useStore(state => state.increment2)
   const incrementC1 = useStore(state => state.incrementarFunc)


    return (
        <>
            componente 2
            <h1>{count}</h1>
            <button onClick={increment2}>incrementar componente 2</button> <br />
            <button onClick={incrementC1}>incrementar componente 1</button>
            {/* nesse ultimo botão re-renderizamos um componente desse outro componente */}
        </>
    )
}

export default Com2