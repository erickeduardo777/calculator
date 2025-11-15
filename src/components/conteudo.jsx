import { Calculator } from "lucide-react"
import CxInp from "./caixaTexto"
import CxRadio from "./cxRadio"
import { useForm, Controller, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import schema from "../validation/zod"


const CxConteudo = () => {
    const methods = useForm({
        resolver: zodResolver(schema)
    })

    const onSubmit = (dados) => {
        console.log(dados)
        window.alert("enviado")
    }
    

    return (
        <div className="bg-white font-semibold min-h-[50%] p-7 space-y-7 ">
            <div className="space-y-3">
                <h1 className="text-[#0E2836] text-3xl">Mortgage Calculator</h1>
                <button className="text-[#56626A] underline">Clear All</button>
            </div>
            <form action="#" method="post" className="space-y-7" onSubmit={methods.handleSubmit(onSubmit)}>
                <FormProvider {...methods}>
                    <div className="space-y-8">
                        <Controller
                            name="amount"
                            control={methods.control}
                            defaultValue=""
                            render={({ field }) => (
                                <CxInp label={"Mortgage Amount"} nameINP={"amount"} simbol={"£"} scale={0} right={false} {...field} />
                            )}
                        />
                        <Controller
                            name="term"
                            defaultValue=""
                            control={methods.control}
                            render={({ field }) => (
                                <CxInp label={"Mortgage Term"} nameINP={"term"} simbol={"years"} scale={0} right={true} {...field} />
                            )}
                        />
                        <Controller 
                            name="rate"
                            defaultValue={""}
                            control={methods.control}
                            render={({field}) => (
                                <CxInp label={"Interest Rate"} nameINP={"rate"} simbol={"%"} scale={2} right={true} {...field} />
                            )}
                        />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <span className="text-[#56626A] text-[18px]">Mortgage Type</span>
                        <div className="space-y-3">
                            <CxRadio label={"Repayment"} value={"repayment"} />
                            <CxRadio label={"Interest Only"} value={"only"} />
                        </div>
                        {methods?.formState?.errors?.radio?.message && <span className="text-red-600">{methods?.formState?.errors?.radio?.message}</span>}
                    </div>
                    <button type="submit" className="bg-[#BAC528] outline-none text-[#0E2836] font-bold text-[18px] rounded-4xl w-full flex justify-center gap-x-3.5 p-4 hover:bg-[#BAC528]/70 cursor-pointer">
                        <Calculator strokeWidth={2.5} />
                        <span>Calculate Repayments</span>
                    </button>
                </FormProvider>
                
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