import { z } from "zod"

const schema = z.object({
    amount: z.string().nonempty("This field is required"),
    term: z.string().nonempty("This field is required"),
    rate: z.string().nonempty("This field is required"),
    radio: z.enum(['repayment', 'only'], "This field is required")
})

export default schema