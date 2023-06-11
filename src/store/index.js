import { configureStore } from '@reduxjs/toolkit'
import stepDataReducer from './stepData'
export const store = configureStore({
    reducer: {
        stepData: stepDataReducer,
    },
})