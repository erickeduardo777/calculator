import { Calculator } from "lucide-react"
import CxInp from "./caixaTexto"
import CxRadio from "./cxRadio"
import { useState } from "react"
// import { z } from "zod"


// const schema = z.object({
//     amount: z.string().nonempty("This field is required"),
// })

const CxConteudo = () => {
    const [check, setCheck] = useState(false)
    

    return (
        <div className="bg-white font-semibold min-h-[50%] p-7 space-y-7 ">
            <div className="space-y-3">
                <h1 className="text-[#0E2836] text-3xl">Mortgage Calculator</h1>
                <button className="text-[#56626A] underline">Clear All</button>
            </div>
            <form action="#" method="post" className="space-y-7">
                <div className="space-y-8">
                    <CxInp label={"Mortgage Amount"} simbol={"£"} scale={0} right={false}  />
                    <CxInp label={"Mortgage Term"} simbol={"years"} scale={0} right={true} />
                    <CxInp label={"Interest Rate"} simbol={"%"} scale={2} right={true} />
                </div>
                <div className="flex flex-col gap-y-4">
                    <span className="text-[#56626A] text-[18px]">Mortgage Type</span>
                    <div className="space-y-3">
                        <CxRadio label={"Repayment"} name={"INPradio"} value={"inp1"} onChange={(e) => setCheck(e.target.value)} checked={check === "inp1"} />
                        <CxRadio label={"Interest Only"} name={"INPradio"} value={"inp2"} onChange={(e) => setCheck(e.target.value)} checked={check === "inp2"} />
                    </div>
                </div>
                <button type="submit" className="bg-[#BAC528] outline-none text-[#0E2836] font-bold text-[18px] rounded-4xl w-full flex justify-center gap-x-3.5 p-4 hover:bg-[#BAC528]/70 cursor-pointer">
                    <Calculator strokeWidth={2.5} />
                    <span>Calculate Repayments</span>
                </button>
            </form>
        </div>
    )
}

export default CxConteudo

// vai funcionar assim erick: vamos aprender a validar um input IMask e quando o formulário esiver valido, com a função handleSubmit vamos chamar as funções do ZUSTAND
// aprender como pegar os dados dos inputs apos serem validado com RHF(react-hook-form) + ZOD

// 1- aprender a validar um input IMask com RHF
// 2- aprender a pegar os dados validados do input com RHF
// 3- chamar as funções zustand com handleSubmit e passar os dados que foram validados do fomulário