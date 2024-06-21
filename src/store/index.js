import { configureStore, createSlice } from '@reduxjs/toolkit'


const fetchSlice = createSlice({
    name: 'fetchNews',
    initialState: {
        spineer: true,
        datalength:0,
        error:""
    },
    reducers: {
        isSpinner: (state, actions) => {
            state.spineer = false
        },
        setlength:(state,actions)=>{
            state.datalength  = actions.payload
        },
        iserror:(state,actions)=>{
            state.error = actions.payload
        }
    }
})


const newsStore = configureStore({
    reducer: {
        fetchNews: fetchSlice.reducer
    }
})


export const fetchactions = fetchSlice.actions
export default newsStore