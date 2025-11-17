import useStore from "../store/zustand";
import CxResultPrenchido from "./resultPrenchido";
import CxResultVazio from "./resultVazio";

const CxResultado = () => {
  const parcelaMensal = useStore((state) => state.parcelaMensal); // componente consumidor
  const totalPago = useStore((state) => state.totalPago);
 // useStore marca o componente como consumidor do estado --> que sera alterado


  return (
    <>
      {parcelaMensal === 0 ? (
        <CxResultVazio />
      ) : (
        <CxResultPrenchido
          parcelaMensal={parcelaMensal}
          totalPago={totalPago}
        />
      )}
    </>
  );
};

export default CxResultado;
