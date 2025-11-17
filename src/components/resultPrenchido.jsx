const converterV = (v) => {
  const valorConvertido = Intl.NumberFormat("en-US", {
    // converte para moeda com duas casas decimais
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(v); // retorna uma string não numero

  // const valor = valorConvertido.replace(/,/g, ".")
  // retur valor
  // troca o separador de milhar pelo decimal manualmente
  return valorConvertido;
};

const CxResultPrenchido = ({ parcelaMensal, totalPago }) => {
    const mensal = converterV(parcelaMensal);
    const total = converterV(totalPago);



  return (
    <div className="fundoResult text-white text-left! p-7 gap-y-10 xl:p-10">
        <div className="space-y-3">
            <h1 className="text-2xl font-semibold w-full">Your results</h1>
            <p className="text-gray-400 text-[16px] w-full font-medium">
                Yout results are shown below based on the infomation you provided. To
                adjust the results, edit the form and click "calculate repayments"
                again.
            </p>
        </div>
        <div className="bg-[#0E2431] rounded-[10px] border-t-4 border-t-[#D9DB30] w-full p-5 truncate">
            <div className="truncate space-y-1">
                <h2 className="text-gray-400 font-medium text-[16px]">
                Your monthly repayments
                </h2>
                <span className="text-[#D9DB30] text-[44px] font-semibold truncate select-all">
                {mensal}
                </span>
            </div>

            <hr className="border-t w-full border-gray-500 my-4"></hr>

            <div className="space-y-4 truncate">
                <h2 className="text-gray-400 font-medium text-[16px]">
                Total you 'll repay over the term
                </h2>
                <span className="text-white text-3xl font-semibold truncate select-all">
                {total}
                </span>
            </div>
        </div>
    </div>
  );
};

export default CxResultPrenchido;
