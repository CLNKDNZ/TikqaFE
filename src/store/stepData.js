import {createSlice} from "@reduxjs/toolkit";

export const stepDataSlice = createSlice({
    name: 'stepData',
    initialState: {
            data : {
                name : "Login Test",
                type: "Browser",
                description: "www.hangikredi.com üzerinden Üyelik Testi yapılacak ",
                isHeadless: false,
                isGrid: false,
                acceptanceCriteria: null,
                status: true,
                tagList: [],
                platformList: [],
                operatingSystemList: [],
                browserList: [],
                testSteps: [
                    {
                        eventOrder: 0,
                        linkFrom: 0,
                        linkTo: 1,
                        name: "Linke git",
                        selectorTypeValue: null,
                        eventParamValue: "https://www.hangikredi.com/giris?uye-ol=true",
                        selectorType: {
                            id: null
                        },
                        testCaseEvent: {
                            id: null,
                            eventParam: []
                        }
                    }
                ]
            },
            activeStep: 0
            },
    reducers: {
        updateStateData: (state, action) => {
            state.data = {
                ...state.data,
                ...action.payload
            }
        },
        updateStepData: (state, action) => {
            state.data.testSteps[state.activeStep] = {
                ...state.data.testSteps[state.activeStep],
                ...action.payload
            }
        },
        updateActiveStep: (state, action) => {
            state.activeStep = action.payload
        },
        addStep: (state, action) => {
            console.log("dd")
            state.data.testSteps.push({
                eventOrder: state.data.testSteps.length,
                linkFrom: state.data.testSteps.length - 1,
                linkTo: state.data.testSteps.length + 1,
                name: "Yeni Adım",
                selectorTypeValue: null,
                eventParamValue: null,
                selectorType: {
                    name: null
                },
                testCaseEvent: {
                    id: null,
                    eventParam: []
                },
                ...action.payload
            })
            state.activeStep = state.data.testSteps.length - 1;
        }
    }
})

export const {updateStateData, updateStepData, updateActiveStep, addStep} = stepDataSlice.actions;

export default stepDataSlice.reducer;