import { Calculator } from "lucide-react";
import CxInp from "./caixaTexto";
import CxRadio from "./cxRadio";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "../validation/zod";
import useStore from "../store/zustand";

const CxConteudo = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      // 'reset()' --> volta tudo para os valores padrão
      amount: "", // input sem valor inicial? não usa 'reset()?' --> defaultValues desnecessario
      term: "",
      rate: "",
      radio: undefined,
    },
  });
  const repaymentMortgage = useStore((state) => state.repaymentMortgage);
  const interestOnly = useStore((state) => state.interestOnly);
  const reset = useStore((state) => state.reset);

  const onSubmit = (dados) => {
    console.log(dados);
    switch (dados.radio) {
      case "repayment":
        repaymentMortgage(dados.amount, dados.rate, dados.term);
        break;

      case "only":
        interestOnly(dados.amount, dados.rate, dados.term);
        break;

      default:
        window.alert("[error] dados recebidos inválido");
        break;
    }
  };

  

  return (
    <div className="bg-white font-semibold min-h-[50%] p-7 space-y-7 xl:min-w-[50%] xl:min-h-full xl:rounded-l-2xl">
      <div className="space-y-3 xl:flex xl:justify-between xl:w-full">
        <h1 className="text-[#0E2836] text-3xl select-all selection:bg-[#D9DB30] selection:text-white">
          Mortgage Calculator
        </h1>
        <button
          className="text-[#56626A] underline cursor-pointer"
          onClick={() => {
            methods.reset();
            reset();
          }}
        >
          Clear All
        </button>
      </div>

      <form
        action="#"
        autocomplete="on"
        method="post"
        className="space-y-7 xl:space-y-8"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <FormProvider {...methods}>
          <div className="space-y-8 xl:grid xl:grid-cols-2 xl:gap-x-7 xl:space-y-0 xl:gap-y-5">
            <Controller
              name="amount"
              control={methods.control}
              defaultValue=""
              render={({ field }) => (
                <CxInp
                  label={"Mortgage Amount"}
                  nameINP={"amount"}
                  simbol={"£"}
                  scale={0}
                  gr={true}
                  right={false}
                  {...field}
                />
              )}
            />
            <Controller
              name="term"
              defaultValue=""
              control={methods.control}
              render={({ field }) => (
                <CxInp
                  label={"Mortgage Term"}
                  nameINP={"term"}
                  simbol={"years"}
                  scale={0}
                  right={true}
                  {...field}
                />
              )}
            />
            <Controller
              name="rate"
              defaultValue={""}
              control={methods.control}
              render={({ field }) => (
                <CxInp
                  label={"Interest Rate"}
                  nameINP={"rate"}
                  simbol={"%"}
                  scale={2}
                  right={true}
                  {...field}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="text-[#56626A] text-[18px]">Mortgage Type</span>
            <div className="space-y-3">
              <CxRadio label={"Repayment"} value={"repayment"} />
              <CxRadio label={"Interest Only"} value={"only"} />
            </div>
            {methods?.formState?.errors?.radio?.message && (
              <span className="text-red-600">
                {methods?.formState?.errors?.radio?.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#D9DB30] outline-none text-[#0E2836] font-bold text-[18px] rounded-4xl w-full flex justify-center gap-x-3.5 p-4 hover:bg-[#D9DB30]/50 cursor-pointer xl:w-[60%]"
          >
            <Calculator strokeWidth={2.5} />
            <span>Calculate Repayments</span>
          </button>
        </FormProvider>
      </form>
    </div>
  );
};

export default CxConteudo;

// #D9DB30
