import { create } from "zustand";

const useStore = create((set, get) => ({
    parcelaMensal: 0,
    totalPago: 0,

    repaymentMortgage: (valor, taxaAnual, anos) => {
        const i = (taxaAnual / 100) / 12;
        const n = anos * 12;

        const parcela = valor * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
        const total = parcela * n;

        set({ parcelaMensal: parcela, totalPago: total });
    },
    interestOnly: (valor, taxaAnual, anos) => {
        const i = (taxaAnual / 100) / 12

        const parcela = valor * i
        const totalJuros = parcela * (anos * 12)

        set({ parcelaMensal: parcela, totalPago: totalJuros })
    },
    reset: () => set({ parcelaMensal: 0, totalPago: 0 })
}));

export default useStore;

// 'get' pega um estado da store
// 'set' atualiza a store. retorna um objeto e o react escuta as mudanças
