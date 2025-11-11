const CxResultado = () => {
// h-[325px]

    return (
        <div className="bg-[#133040] min-h-[50%] flex flex-col items-center justify-center text-center gap-y-4 py-15">
            <div>
                <img src="/calculator/assets/images/illustration-empty.svg" alt="imagem de uma calculadora que indica os dados vazios" />
            </div>
            <h1 className="text-white text-2xl">Results shown here</h1>
            <p className="text-[#7693A5] text-[18px] max-w-[400px]">
                Complete the form and click "calculate rapayments" to see what your monthly repayments would be.
            </p>
        </div>
    )
}

export default CxResultado