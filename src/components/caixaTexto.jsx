import { useId } from "react";
import { useFormContext } from "react-hook-form";
import { IMaskInput } from "react-imask";
// IMaskInput --> é equivalente ao input normal mas com suporte a mascara

const CxInp = ({ label, nameINP, simbol, scale, gr, right, ...props }) => {
  const ID = useId();
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <label
      htmlFor={ID}
      className={`flex flex-col gap-y-2 ${gr && "xl:col-span-2"}`}
    >
      <span className="text-[#56626A] text-[18px] select-none">{label}</span>
      <div
        className={`border-[1.2px] border-[#0E2836] rounded-[5px] w-full h-[50px] flex ${
          right === true ? "flex-row" : "flex-row-reverse"
        } overflow-hidden has-[input:focus]:border-[#D9DB30] has-[input:hover]:border-b-black has-[input:hover]:border-b-2 ${
          errors[nameINP]?.message && "border-red-600"
        }`}
      >
        {/* has: ==> é ativado quando um elemento filho recebe foco */}
        <IMaskInput
          id={ID}
          mask={Number} // formato de mascara
          radix={"."} // separador decimal
          thousandsSeparator={","} // separador de milhar
          scale={scale} // casas decimais maximas
          padFractionalZeros={false} // preenche centavos automaticamente
          unmask={false} // se true retorna o valor puro sem mascaras
          onAccept={(value) => props.onChange(value)}
          {...props}
          className="outline-none border-none text-[20px] font-bold h-full w-full peer pl-5 cursor-pointer"
        ></IMaskInput>
        <div
          className={`bg-[#D7E9F2] h-full p-5 flex justify-center items-center peer-focus:bg-[#D9DB30] peer-focus:[&>*:first-child]:text-[#0E2836] ${
            errors[nameINP]?.message && "bg-red-600"
          }`}
        >
          <span
            className={`text-[#56626A] font-bold text-[18px] select-none ${
              errors[nameINP]?.message && "text-white"
            }`}
          >
            {simbol}
          </span>
        </div>
      </div>
      {errors[nameINP]?.message && (
        <span className="text-red-600">{errors[nameINP]?.message}</span>
      )}
    </label>
  );
};

export default CxInp;

/*
    peer-focus:[&>*:first-child]:text-[#0E2836]

    & --> este elemento
    > --> seleciona filhos diretos
    * --> pega qualquer tag
    firs-child --> seleciona o primeiro filho
*/
