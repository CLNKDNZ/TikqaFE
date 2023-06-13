import {useDispatch, useSelector} from "react-redux";
import {updateActiveStep} from "@/store/stepData";

const RoadMap = () => {
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.stepData);


    return (
        <div className="roadMap">
            <ul>
                {
                    data.testSteps?.map((item, index) => {
                        return (
                            <li key={index}
                                onClick={
                                    () => {
                                        dispatch(updateActiveStep(index))
                                    }
                                }
                            >
                                <div className="whichStep">{index + 1}</div>
                                <a
                                    onClick={
                                        (e) => {
                                            e.preventDefault();
                                            dispatch(updateActiveStep(index))
                                        }
                                    }
                                    href="#">{item.name} <span></span> </a>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="addStepBtn"> <img src="/images/add.svg" alt="" /> Adım Ekle</button>
        </div>
    )
}

export default RoadMap;