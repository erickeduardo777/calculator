import { useId } from "react"

const CxRadio = ({ name, label }) => {
    const ID = useId()


    return (
        <div>
            <input type="radio" name={name} id={ID} />
            <label htmlFor={ID}>{label}</label>
        </div>
    )
}

export default CxRadio