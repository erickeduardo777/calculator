import CxConteudo from "./components/conteudo"
import CxResultado from "./components/resultado"

function App() {
  

  return (
    <main className="bg-[#E3F4FC] flex flex-col items-center justify-center min-h-dvh xl:min-h-screen xl:p-10">
      <div className="flex flex-col w-full xl:flex-row xl:min-h-[600px] overflow-hidden xl:bg-white xl:w-[80%] xl:rounded-l-2xl xl:rounded-r-2xl">
        <CxConteudo />
        <CxResultado />
      </div>
    </main>
  )
}

export default App
