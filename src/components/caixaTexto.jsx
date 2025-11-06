import { useId } from "react"
import { IMaskInput } from "react-imask" 
// IMaskInput --> é equivalente ao input normal mas com suporte a mascara

const CxInp = ({ label, simbol, scale, props }) => {
    const ID = useId()


    return (
        <div className="flex">
            <label htmlFor={ID}>{label}</label>
            <IMaskInput
                id={ID}
                mask={Number}
                radix={"."}// separador decimal
                thousandsSeparator={","}// separador de milhar
                scale={scale}// casas decimais maximas
                padFractionalZeros={false}// preenche centavos automaticamente
                unmask={true}// se true retorna o valor puro sem mascaras
                {...props}
                onAccept={(valor) => {// onAccept ==> evento do da lib. funciona igual o onChange
                    guardado.current = valor 
                    if(props.onChange) props.onChange({ target: { value: valor } })
                 // toda vez que o campo mudar, passa para o parametro 'onChange' um obj
                } }
                className="border border-red-500"
            >
            </IMaskInput>
            <div>
                <span>{simbol}</span>
            </div>
        </div>
    )
}


export default CxInp

// faça erick um parametro que se for true o estilo vai ser flex-row se for false o estilo vai ser flex-row-reverse na caixa do input

// function App() {
//   const [cpf, setCpf] = useState("");

//   return (
//     <div className="p-4 space-y-4">
//       <CxTexto
//         label="CPF"
//         mask="000.000.000-00"
//         value={cpf}
//         onChange={(e) => setCpf(e.target.value)} // ← onChange padrão do React
//       />

//       <p>CPF sem máscara: {cpf}</p>
//     </div>
//   );
// }