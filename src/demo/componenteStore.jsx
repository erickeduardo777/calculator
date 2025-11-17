import { create } from "zustand";

const useStore = create((set, get) => ({
    count: 0,
    Component2: 0,

    increment2: () => set({ Component2: get().Component2 + 1 }),
    incrementarFunc: () => set({ count: get().count + 1 }),
    decrement: () => {
        if (get().count == 0) return 
        set({ count: get().count - 1 });
    },
    reset: () => set({ count: 0 }),
}));

export default useStore;

// "set" --> cria e retorna um objeto e o react escuta as mudanças dele
// "set" --> atualiza a store

// "get" --> pega um estado atual da store
