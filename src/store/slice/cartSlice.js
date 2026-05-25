import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const produto = action.payload;
            const itemExistente = state.items.find(item => item.id === produto.id); 

            state.totalQuantity++;
            state.totalPrice += produto.price

            if(!itemExistente) {
                state.items.push({
                    ...produto,
                    quantidadeComprada: 1
                });
            } else {
                itemExistente.quantidadeComprada++;
            }

            alert(`${produto.name} adicionado ao carrinho`)
        },
        clearCart: (state) => {
            state.items = []
            state.totalQuantity = 0
            state.totalPrice = 0
        }
    }
})

export const {addToCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;