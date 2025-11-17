import { z } from "zod"

// recebe automaticamente como parametro o value
const parceConvertNumber = (value) => Number(value.replace(/,/g, ""))
// return implícito


const schema = z.object({
    amount: z.string().nonempty("This field is required").transform((value, ctxV) => {
        // ctxV --> contexto da validação

        const noV = value.replace(/,/g, "")// 'noV' --> recebe o valor sem virgula
        // regex --> troca TODA virgula por um espaço vazio
        const num = Number(noV)// tenta transformar o valor sem virgula para numero

        if(isNaN(num)) {// se o valor 'não for um numero' isNAN
            ctxV.addIssue({// mostrar erro
                code: "custom",
                message: "o valor não é um numero" 
            })

            return z.NEVER // interrompe a validação
        }// nunca é isNAN porque a mascara do input só permite digitar números

        return num // retorna o valor do campo sem virgula convertido para numero
    }).pipe(z.number().min(1, "o valor da hipoteca precisa ser maior que '0'")),
    term: z.string().nonempty("This field is required").transform((v, ctxV) => Number(v.replace(/,/g, ""))).pipe(z.number().min(1, "o prazo é de no minimo '1' ano").max(60, "o prazo é de no maximo '60' anos")),
    rate: z.string().nonempty("This field is required").transform(parceConvertNumber).pipe(z.number().min(1, "a taxa de juro é de no minimo ").max(1000, "a taxa de juros maxima é de '1000'")),
    radio: z.enum(['repayment', 'only'], "This field is required")
})

export default schema