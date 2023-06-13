import {File, Select, Text} from "@/components/Form/Index";
import {useEffect, useState} from "react";
import fromApi from "@/utils/fromApi";
import {useSelector,useDispatch} from "react-redux";
import {updateStateData, updateStepData, updateActiveStep, addStep} from "@/store/stepData";

const TestFlowForm = ({activeStep, active}) => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.stepData.data);


    const [event, setEvent] = useState([]);
    const [locator, setLocator] = useState([]);
    const [formData, setFormData] = useState(data.testSteps[activeStep] || {});

    useEffect(() => {
        fromApi("GET", "event", null, (res) => {
            setEvent(res.data);
        });
        fromApi("GET", "selector", null, (res) => {
            setLocator(res.data);
        });
    }, []);

    return (
        <div style={{
            display: active ? "block" : "none"
        }} >
            <div className="cardTitle positionCorner"><span>{
                activeStep !== null ? activeStep + 1 : 1
            }</span></div>
            <form action="">
                <h3>{activeStep+1}. adım</h3>
                <Select
                    name="Aksiyon Seç"
                    id="action"
                    onChange={
                        (e) => {
                            setFormData({
                                ...formData,
                                testCaseEvent: {
                                    ...formData.testCaseEvent,
                                    id: parseInt(e.target.value)
                                }
                            })
                        }
                    }
                    options={event}
                    selected={formData?.testCaseEvent?.id}
                />
                <Select
                    name="Locator seçimi"
                    id="locator"
                    onChange={
                        (e) => {
                            setFormData({
                                ...formData,
                                selectorType: {
                                    ...formData.selectorType,
                                    id: parseInt(e.target.value)
                                }
                            })
                        }
                    }
                    options={locator}
                    selected={formData?.selectorType?.id}
                />

                <Text
                    name="Locator değeri"
                    id="locatorVal"
                    placeholder="UserName"
                    desc="İlgili alanın adını yazın"
                    onChange={
                        (e) => {
                            setFormData({
                                ...formData,
                                selectorTypeValue: e.target.value
                            })
                        }
                    }
                />
                <Text
                    name="Locator değerinin önyüzdeki adı (isteğe bağlı)"
                    id="locatorVal2"
                    placeholder="Kullanıcı adı"
                    desc="İlgili alanın adını yazın"
                    onChange={
                        (e) => {
                            setFormData({
                                ...formData,
                                eventParamValue: e.target.value
                            })
                        }
                    }
                />

                <File
                    label="Input Ekle"
                    id="addInput"
                    onChange={
                        (e) => {
                            setFormData({
                                ...formData,
                                name: e.target.value
                            })
                        }
                    }
                    desc="Birden fazla input eklemek için dosya ekle butonunu kullanın"
                />

                <Text
                    name="Not Ekle"
                    id="note"
                    placeholder=""
                />
                <div className="formButton">
                    <button className="cancelBtn" type="button">İptal</button>
                    <button
                        onClick={
                            () => {
                                dispatch(updateStepData(formData));
                            }
                        }
                        type="button">Kaydet</button>
                </div>
            </form>
        </div>
    );
}

export default TestFlowForm;