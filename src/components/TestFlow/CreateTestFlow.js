import Step from "@/components/Step";
import { Select, Text, File} from "@/components/Form/Index";
import fromApi from "@/utils/fromApi";
import {useState,useEffect} from "react";
import TestFlowForm from "@/components/TestFlow/TestFlowForm";
import {useDispatch, useSelector} from "react-redux";
import RoadMap from "@/components/TestFlow/RoadMap";
import {addStep} from "@/store/stepData";
import {useRouter} from "next/router";

const CreateTestFlow = () => {
    const dispatch = useDispatch();
    const {activeStep,data} = useSelector(state => state.stepData);
    const router = useRouter()

    const [event, setEvent] = useState([]);
    const [locator, setLocator] = useState([]);

    useEffect(() => {
        fromApi("GET", "event", null, (res) => {
            setEvent(res.data);
        });
        fromApi("GET", "selector", null, (res) => {
            setLocator(res.data);
        });
    }, []);

    return (
        <section id="fluidContent">
            <div className="centerWrapper">
                <Step step={2} howCreate={true} />
                <div className="centerCard fullWidth formV">
                    <div className="cardTitle"><span>2</span> Test akışı oluştur</div>
                    <div className="loginTestWrapper">
                        <a href="#" className="loginTest">Amazon login testi</a>
                    </div>
                    <div className="roadMapContent">
                        {
                            data.testSteps.length > 1 ? <RoadMap /> : null
                        }
                        <div className="formBoxV2">
                            <div className="formBg">



                                {/*<div className="addStepTop">*/}
                                {/*    <div className="connectStepName"><img src="/images/connectMulti.png" alt=""/>*/}
                                {/*        <span className="stepTop">1</span> <span>1</span>*/}
                                {/*    </div>*/}
                                {/*</div>*/}


                                {
                                    data.testSteps.map((item, index) => {
                                        return (
                                            <TestFlowForm key={index} activeStep={index} active={
                                                activeStep === index
                                            } />
                                        )
                                    })
                                }



                                <div className="addStep connectStep">
                                    {/*<div className="connectStepName"><img src="/images/connectStep.png" alt=""/>*/}
                                    {/*    <span>4</span>*/}
                                    {/*</div>*/}
                                    <button
                                        onClick={
                                            () => {

                                                dispatch(addStep());
                                            }
                                        }
                                        className="addStepBtn"><img src="/images/add.svg" alt=""/> Adım Ekle
                                    </button>
                                </div>
                            </div>
                            <div className="formButton">
                                <button
                                    onClick={
                                        () => {
                                            router.push('/testCalendar');
                                        }
                                    }
                                    type="button"><img src="/images/right.svg" alt=""/> Çalışma Takvimine Geç</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateTestFlow;