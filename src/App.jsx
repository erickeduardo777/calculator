import CxConteudo from "./components/conteudo"
import CxResultado from "./components/resultado"

function App() {
  

  return (
    <div className="min-h-dvh">
      <main className="bg-purple-800 flex flex-col min-h-dvh">
        <CxConteudo />
        <CxResultado />
      </main>
    </div>
  )
}

export default App
