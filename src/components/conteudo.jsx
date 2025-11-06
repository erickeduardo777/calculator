import { Calculator } from "lucide-react"
import CxInp from "./caixaTexto"
import CxRadio from "./cxRadio"

const CxConteudo = () => {


    return (
        <div>   
            <div>
                <h1>Mortgage Calculator</h1>
                <button>Clear All</button>
                <form action="#" method="post">
                    <div>
                        <CxInp label="Mortgage Amount" simbol={"£"} scale={2}  />
                        <CxInp label={"Mortgage Term"} simbol={"years"} scale={0} />
                        <CxInp label={"Interest Rate"} simbol={"%"} scale={2} />
                    </div>
                    <div>
                        <span>Mortgage Type</span>
                        <CxRadio label={"Repayment"} name={"INPradio"} />
                        <CxRadio label={"Interest Only"} name={"INPradio"} />
                    </div>
                    <button type="submit">
                        <Calculator />
                        <span>Calculate Repayments</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CxConteudo