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
                        name: null,
                        selectorTypeValue: null,
                        eventParamValue: "https://www.hangikredi.com/giris?uye-ol=true",
                        createdAt: "2022-01-13T17:09:42.411",
                        createdBy: "Deniz Celenk",
                        lastUpdatedAt: null,
                        lastUpdatedBy: null,
                        selectorType: {
                            name: "XPATH"
                        },
                        testCaseEvent: {
                            id: 3,
                            type: "ACTION",
                            name: "GO_TO_URL",
                            description: "Can go any url on your browser. You have go pass right parameters.",
                            eventParam: []
                        }
                    },
                    {
                        eventOrder: 1,
                        linkFrom: 0,
                        linkTo: 2,
                        name: null,
                        selectorTypeValue: "//*[@id='name-register']",
                        eventParamValue: "Deniz",
                        createdAt: "2022-01-13T17:09:42.411",
                        createdBy: "Deniz Celenk",
                        lastUpdatedAt: null,
                        lastUpdatedBy: null,
                        selectorType: {
                            name: "XPATH"
                        },
                        testCaseEvent: {
                            id: 2,
                            type: "ACTION",
                            name: "SEND_KEY",
                            description: "Can write anything inner all input element. You have go pass right parameters.",
                            eventParam: []
                        }
                    }
                ]
            }
            },
    reducers: {
        updateStateData: (state, action) => {
            state.data = {
                ...state.data,
                ...action.payload
            }
        }
    }
})

export const {updateStateData} = stepDataSlice.actions;

export default stepDataSlice.reducer;