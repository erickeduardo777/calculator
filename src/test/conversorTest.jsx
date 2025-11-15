import { useRef, useState } from "react";

const ConversorTest = () => {
  const inputREF = useRef();
  const [convertido, setConvertido] = useState("aqui fica o valor convertido");

  const converter = () => {
    let valueConvertido = Intl.NumberFormat("pt-BR", {
      // define formato regional pontos e virgulas
      style: "currency", // define a formatação em moeda
      currency: "USD", // define qual a moeda
    }).format(inputREF.current.value); // valor formatado
    setConvertido(valueConvertido)
  };

  return (
    <>
      <h1>conversor em moeda em tempo real</h1>
      <input
        type="number"
        ref={inputREF}
        onChange={converter}
        className="border"
      />
      <h1>{convertido}</h1>
    </>
  );
};

export default ConversorTest;
