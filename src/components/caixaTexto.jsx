import { useId } from "react"
import { IMaskInput } from "react-imask" 
// IMaskInput --> é equivalente ao input normal mas com suporte a mascara

const CxInp = ({ label, simbol, scale, right, ...props }) => {
    const ID = useId()


    return (
        <div className="flex flex-col gap-y-2">
            <label htmlFor={ID} className="text-[#56626A] text-[18px]">{label}</label>
            <div className={`border-[1.2px] border-[#0E2836] rounded-[5px] w-full h-[50px] flex ${ right === true ? "flex-row" : "flex-row-reverse" } overflow-hidden has-[input:focus]:border-[#BAC528] has-[input:hover]:border-b-black has-[input:hover]:border-b-2`}>
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
                    onAccept={(valor) => {// onAccept ==> evento da lib. funciona igual o onChange
                        if(props.onChange) props.onChange({ target: { value: valor } })
                     // toda vez que o campo mudar, passa para o parametro 'onChange' um obj
                    } }
                    className="outline-none border-none text-[20px] font-bold h-full w-full peer pl-5 cursor-pointer"
                >
                </IMaskInput>
                <div className="bg-[#D7E9F2] h-full p-5 flex justify-center items-center peer-focus:bg-[#BAC528] peer-focus:[&>*:first-child]:text-[#0E2836]">
                    <span className="text-[#56626A] font-bold text-[18px]">
                        {simbol}
                    </span>
                </div>
            </div>
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