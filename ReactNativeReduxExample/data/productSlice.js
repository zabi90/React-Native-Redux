import { createSlice }  from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchAllProducts = createAsyncThunk('fetch-all-products', async () => {
    const response = await fetch("http://private-ba0621-dummy95.apiary-mock.com/products");
    return response.json()
})

const productSlice = createSlice({
    name : 'products',
    initialState: { data : [], fetchStatus : ''},
    reducers : {
    },
    extraReducers :  (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state,action) => {
            state.data = action.payload
            state.fetchStatus = 'success'
        })

        builder.addCase(fetchAllProducts.pending, (state) => {
            state.fetchStatus = 'loading'
        })

        builder.addCase(fetchAllProducts.rejected, (state) => {
            state.fetchStatus = 'error'
        })
    }
});


export default productSlice;