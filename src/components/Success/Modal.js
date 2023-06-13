import { useSelector } from "react-redux";
import { updateStateData } from "@/store/stepData";
const Modal = () => {
    const { name } = useSelector((state) => state.stepData.data);
    return (
        <section id="centerContent" className="bgBlock">
            <div className="centerWrapper">
                <div className="centerCard">
                    <img src="/images/check_circle.svg" alt=""/>
                        <h1 className="successDesc"><strong>“{name}”</strong> test kurulumunuz<br/>tamamlanmıştır.</h1>
                        <div className="successLink">
                            Tüm test listesini görmek için <a href='//'>tıklayınız.</a>
                        </div>
                </div>
            </div>
        </section>
        )
}

export default Modal;