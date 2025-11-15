import { useId } from "react"
import { useFormContext } from "react-hook-form"
import { IMaskInput } from "react-imask" 
// IMaskInput --> é equivalente ao input normal mas com suporte a mascara

const CxInp = ({ label, nameINP, simbol, scale, right, ...props }) => {
    const ID = useId()
    const { formState: { errors } } = useFormContext()


    return (
        <div className="flex flex-col gap-y-2">
            <label htmlFor={ID} className="text-[#56626A] text-[18px]">{label}</label>
            <div className={`border-[1.2px] border-[#0E2836] rounded-[5px] w-full h-[50px] flex ${ right === true ? "flex-row" : "flex-row-reverse" } overflow-hidden has-[input:focus]:border-[#BAC528] has-[input:hover]:border-b-black has-[input:hover]:border-b-2 ${errors[nameINP]?.message && "border-red-600"}`}>
                {/* has: ==> é ativado quando um elemento filho recebe foco */}
                <IMaskInput
                    id={ID}
                    mask={Number}// formato de mascara
                    radix={"."}// separador decimal
                    thousandsSeparator={","}// separador de milhar
                    scale={scale}// casas decimais maximas
                    padFractionalZeros={false}// preenche centavos automaticamente
                    unmask={true}// se true retorna o valor puro sem mascaras
                    {...props}
                    className="outline-none border-none text-[20px] font-bold h-full w-full peer pl-5 cursor-pointer"
                >
                </IMaskInput>
                <div className={`bg-[#D7E9F2] h-full p-5 flex justify-center items-center peer-focus:bg-[#BAC528] peer-focus:[&>*:first-child]:text-[#0E2836] ${errors[nameINP]?.message && "bg-red-600"}`}>
                    <span className={`text-[#56626A] font-bold text-[18px] ${errors[nameINP]?.message && "text-white"}`}>
                        {simbol}
                    </span>
                </div>
            </div>
            { errors[nameINP]?.message && <span className="text-red-600">{errors[nameINP]?.message}</span> }
        </div>
    )
}


export default CxInp

/*
    peer-focus:[&>*:first-child]:text-[#0E2836]

    & --> este elemento
    > --> seleciona filhos diretos
    * --> pega qualquer tag
    firs-child --> seleciona o primeiro filho
*/