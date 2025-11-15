import { useId } from "react"
import { useFormContext } from "react-hook-form"

const CxRadio = ({ label, value }) => {
    const ID = useId()
    const { register, watch } = useFormContext()
    // watch --> observa o valor do input
    const atualValue = watch("radio")
    const checked = atualValue === value


    return (
        <label htmlFor={ID} className={`border-[1.2px] border-[#0E2836] ${ checked ? "border-[#BAC528] bg-[#BAC528]/10" : "" } rounded-[5px] h-[50px] flex items-center gap-x-4 pl-4 cursor-pointer hover:border-[#BAC528]`}>
            <input 
                type="radio" 
                value={value}
                id={ID} 
                {...register("radio")}
                className="scale-[1.3]  accent-[#BAC528] outline-none"
            />
            <span  className="text-[#0E2836] font-bold text-[18px]">{label}</span>
        </label>
    )
}

export default CxRadio